var express = require('express');
var helpers = require('./helpers');

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
  socket.on('joinRoom', (params) => {
    const username = params.username;
    const roomID = params.room;
    
    //join room with specified ID
    if (rooms[roomID]){
      //room exists
      const room = rooms[roomID];
      room.users++;
    } else {
      //create room
      rooms[roomID] = {
        average: 0,
        getNumHackers: () => {
          const room = io.sockets.adapter.rooms[roomID];
          if (room)
            return Object.keys(room).length;
          else
            return 0;
        },
      };
    }
    
    socket.room = roomID;
    socket.userName = username;
    socket.join(roomID);
    
    const msg = socket.userName + ' has connected to this game';
    
    socket.broadcast.to(socket.room).emit('message', {
      value: msg,
    });
    //io.to('some room').emit('some event'):
    
    console.log(msg + ": " + socket.room);
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
  
  socket.on('disconnect', () => {
    const roomID = socket.room;
    socket.broadcast.to(socket.room).emit('message', {
      value: socket.userName + ' has left this game',
    });
    if(rooms[roomID] && rooms[roomID].getNumHackers() == 0){
      rooms[roomID] = undefined;
    }
  });
});

setInterval(() => {
  for (var key in rooms) {
      const room = rooms[key];
      //send score
      if(!room.average){
        room.average = 0;
      }
      io.to(key).emit('newAverage', {
        value: room.average,
      });
  }
}, 1000);

/* WEB HANDLERS */
app.get('/', (req, res) => {
  res.render('index', { room: '0' });
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