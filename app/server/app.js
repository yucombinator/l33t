var express = require('express');
var helpers = require('./helpers.js');
var path = require("path");

var SCORE_ZONE_LEFT = 0.40;
var SCORE_ZONE_RIGHT = 0.60;
var SCORE_INCREMENT = 10;

var SMA_SIZE = 3; // ammount of historical averages we will include in the SMA calculation

var app = express();
app.set('view engine', 'ejs');  
app.use(express.static(path.join(__dirname , '../public')));
app.set('views', path.join(__dirname, '../public'));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

//TODO(yuchen) we might want to use redis for this at some point
var users = {}; 
var rooms = {};

// time used to calculate the delta in between calculations of the slider position/ cumulative player score sma
var lastTime = Date.now();

/* SOCKET HANDLERS */
io.on('connection', (socket) => { 
  socket.on('joinRoom', (params, cb) => {
    const userName = helpers.generateUserName();
    const roomID = params.room;
    
    const newUser = {
      userName: userName,
      id: socket.id,
    };
    
    const eventsList = helpers.generateRandomEventsForUser();
    
    const eventsByUsersList = eventsList.map((event)=>{
      //add in user data
      return {
        event: event,
        user: newUser,
      };
    });
    
    //join room with specified ID
    if (rooms[roomID]){
      //room exists
      const room = rooms[roomID];
      room.events = room.events.concat(eventsByUsersList);
    } else {
      //create room
      rooms[roomID] = {
        accumulatedAverages : [], // list of averages sent by the clients of this room in the last second
        numAverageUpdates : 0,
        average: 0,
        score: 0,
        events: eventsByUsersList,
        users:[],
        getHackerList: () => {
          return rooms[roomID].users;
        },
        getNumHackers: () => {
          return rooms[roomID].users.length;
        }
      };
    }
    
    rooms[roomID].users.push(newUser);

    socket.room = roomID;
    socket.user = newUser;
    socket.join(roomID);
    
    const msg = socket.user.userName + ' has connected to this game';
    io.to(roomID).emit('broadcast-userschanged', {
      value: rooms[roomID].getHackerList(),
    });
    
    console.log(msg + ": " + socket.room);
    // notify user of their usernam
    cb({
      user: newUser,
      userEvents: eventsList,
      gameConfig : {
        scoreZoneLeft : SCORE_ZONE_LEFT,
        scoreZoneRight : SCORE_ZONE_RIGHT,  
      } 
    });
  });
  
  socket.on('sendKeyScore', (params) => {
    if (socket.room){
      //must be in a room
      rooms[socket.room].accumulatedAverages.push(params.rate);
    }
  });
  
  socket.on('sendEventPress', (params) => {
    const action = params.action;
    if (socket.room && rooms[socket.room].currentEvent && action == rooms[socket.room].currentEvent.event){
      //must be in a room and match action
      io.to(socket.room).emit('eventResolved', {
        allGood: true,
      });
      rooms[socket.room].currentEvent = null;
    }
  });
  
  socket.on('disconnect', () => {
    const roomID = socket.room;
    if (rooms[roomID]) {
      rooms[roomID].users.splice(rooms[roomID].users.indexOf(socket.user), 1);
      
      //Check if we need to reset current event
      if (rooms[roomID].currentEvent != null && rooms[roomID].currentEvent.user.id == socket.id) {
        rooms[roomID].currentEvent = null;
      }
      
      //Clean the event list
      rooms[roomID].events = rooms[roomID].events.filter((eventAndUser) => {
        return !(socket.id == eventAndUser.user.id);
      });
      
      socket.broadcast.to(socket.room).emit('broadcast-userschanged', {
        value: rooms[roomID].getHackerList(),
      });
      
      if(rooms[roomID].getNumHackers() == 0){
        rooms[roomID] = undefined;
      }
      
      console.log(socket.user.userName + " has left the same : " + socket.room);
    }

  });
});


// calculate the smas for each room
setInterval(() => {
  //var nowTime = Date.now();
  //var deltaTime = nowTime - lastTime;
  Object.keys(rooms).forEach((roomID) => {
    //send score and average
    if (!rooms[roomID]) {
      return;
    }

    var room = rooms[roomID];

    if(!room.average){
      room.average = 0;
    }

    var sum = 0;
    room.accumulatedAverages.forEach((accumulatedAverage) => {
      sum += accumulatedAverage;
    }); 

    var averageToAdd = 0;
    var numAccumulatedAverages = room.accumulatedAverages.length;
    if (numAccumulatedAverages != 0) {
      averageToAdd = sum / numAccumulatedAverages;
    }
    
    room.average = (room.average * room.numAverageUpdates + averageToAdd) / (room.numAverageUpdates + 1);
    room.numAverageUpdates ++;
    if (room.numAverageUpdates > SMA_SIZE) {
      room.numAverageUpdates = SMA_SIZE;
    }

    room.accumulatedAverages = [];
  });
  //lastTime = nowTime;
}, 500);

// send game data to rooms
setInterval(() => {
  Object.keys(rooms).forEach((roomID) => {
    //send score and average
    if (!rooms[roomID]) {
      return;
    }
    if(!rooms[roomID].average){
      rooms[roomID].average = 0;
    }
    if(!rooms[roomID].score) {
      rooms[roomID].score = 0;
    }

    io.to(roomID).emit('average', {
      average: rooms[roomID].average
    });  
    io.to(roomID).emit('score', {
      score:rooms[roomID].score
    })
  });
}, 500);

function checkIfRandomEventCompleted(roomID){
  if(rooms[roomID] && rooms[roomID].currentEvent != null){
    rooms[roomID].score -= 50;
    //send penalty
    io.to(roomID).emit('eventPenalty', {
      score: rooms[roomID].score,
    }); 
    return false;
  } else {
    return true;
  }
}

//generate random events
function generateRandomEventsRepeat(){
  Object.keys(rooms).forEach((roomID) => {
    const clients = io.sockets.adapter.rooms[roomID];   
    if(!clients || !clients.sockets){
      return;
    }
    
    if (!rooms[roomID] || !rooms[roomID].events) {
      return;
    }

    if(rooms[roomID].currentEvent != null) {
        return;
    }

    var chooseEvent = rooms[roomID].events[Math.floor(Math.random() * rooms[roomID].events.length)];
    if(chooseEvent instanceof Array) {
      chooseEvent = rooms[roomID].events[0];
    }
    const clientList = Object.keys(clients.sockets);
    const randomUser = clientList[Math.floor(Math.random() * clientList.length)];
    
    io.to(randomUser).emit('newEvent', {
      userEvent: chooseEvent.event,
    });  
    rooms[roomID].currentEvent = chooseEvent;
    
    var checkEventCompleted = function(){
      if(!checkIfRandomEventCompleted(roomID)) {
        setTimeout(checkEventCompleted, 1000);
      }
    };
    //set a check callback
    setTimeout(checkEventCompleted, 5 * 1000); //10 secs
  });
  
  //repeat it
  setTimeout(function(){
    generateRandomEventsRepeat();
  }, Math.random() * 50 * 1000); //0 to 60 secs
}

generateRandomEventsRepeat()

// hacker cred is calculated every 0.5 seconds
setInterval(() => {
  Object.keys(rooms).forEach((roomID) => {
    //send score and average
    if (!rooms[roomID]) {
      return;
    }

    if(!rooms[roomID].score) {
      rooms[roomID].score = 0;
    }

    if(rooms[roomID].average/100 > SCORE_ZONE_LEFT && rooms[roomID].average/100 < SCORE_ZONE_RIGHT) {
      // increment the score
      rooms[roomID].score += SCORE_INCREMENT;
    } 
  });
}, 250);


/* WEB HANDLERS */
app.get('/', (req, res) => {
  const socketsKeys = Object.keys(io.sockets.clients().sockets);
  res.render('intro', { numPlayers: socketsKeys.length + 1337});
});

app.get('/play', (req, res) => {
  const newRoom = helpers.generateRoomId();
  res.redirect('/play/' + newRoom);
});

app.get('/play/:id', (req, res) => {
  const roomID = req.params.id;
  res.render('index', { room: roomID });
});

app.get('/stats', (req, res) => {
  res.render('stats', { users: users, rooms: rooms });
});

var port = process.env.NODE_ENV == 'production'? 80 : 3000;
server.listen(port, () => {
  console.log('App listening on port '+port+'!');
});