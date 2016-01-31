var express = require('express');
var helpers = require('./helpers');

var SCORE_ZONE_LEFT = 0.40;
var SCORE_ZONE_RIGHT = 0.60;

var app = express();
app.set('view engine', 'ejs');  
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

//TODO(yuchen) we might want to use redis for this at some point
var users = {}; 
var rooms = {};

/* SOCKET HANDLERS */
io.on('connection', (socket) => { 
  socket.on('joinRoom', (params, cb) => {
    const userName = helpers.generateUserName();
    const roomID = params.room;
    
    //join room with specified ID
    if (rooms[roomID]){
      //room exists
      const room = rooms[roomID];
      room.events.push(helpers.generateRandomEventsForUser());
    } else {
      //create room
      rooms[roomID] = {
        average: 0,
        events: helpers.generateRandomEventsForUser(),
        users:[],
        getHackerList: () => {
          return rooms[roomID].users;
        },
        getNumHackers: () => {
          return rooms[roomID].users.length;
        }
      };
    }

    var newUser = {
      userName: userName,
      id: socket.id
    };
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
      gameConfig : {
        scoreZoneLeft : SCORE_ZONE_LEFT,
        scoreZoneRight : SCORE_ZONE_RIGHT,  
      } 
    });
  });
  
  socket.on('sendScore', (params) => {
    if (socket.room){
      //must be in a room
      const rate = params.rate; //out of 100
      const room = rooms[socket.room];
      const numHackers = room.getNumHackers();
      const oldAvg = room.average;
      
      const newavg = oldAvg * (numHackers-1)/numHackers + rate /numHackers;
      rooms[socket.room].average = newavg;
    }
  });
  
  socket.on('sendEventPress', (params) => {
    if (socket.room){
      //must be in a room
      const action = params.action;
    }
  });
  
  socket.on('disconnect', () => {
    const roomID = socket.room;
    rooms[roomID].users.splice(rooms[roomID].users.indexOf(socket.user), 1);
    socket.broadcast.to(socket.room).emit('broadcast-userschanged', {
      value: rooms[roomID].getHackerList(),
    });
    if(rooms[roomID] && rooms[roomID].getNumHackers() == 0){
      rooms[roomID] = undefined;
    }
    console.log(socket.userName + " has left the same : " + socket.room);
  });
});

setInterval(() => {
  Object.keys(rooms).forEach((roomID) => {
    //send score
    if (!rooms[roomID]) {
      return;
    }
    if(!rooms[roomID].average){
      rooms[roomID].average = 0;
    }
    io.to(roomID).emit('newAverage', {
      value: rooms[roomID].average,
    });  
  });
}, 1000);

/* WEB HANDLERS */
app.get('/', (req, res) => {
  res.render('intro', { numPlayers: io.sockets.clients().length });
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

server.listen(3000, () => {
  console.log('App listening on port 3000!');
});