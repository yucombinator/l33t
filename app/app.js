var express = require('express');
var app = express();
app.set('view engine', 'ejs');  
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

//TODO(yuchen) we might want to use redis for this at some point
var users = {}; 

/* SOCKET HANDLERS */
io.on('connection', function(socket){ 
  socket.on('joinRoom', function(params) {
    var username = params.username;
    var roomID = params.room;
    //join room with specified ID
    socket.room = roomID;
    socket.userName = username;
    socket.join(roomID);
    socket.broadcast.to(socket.roomomID).emit('updatechat', 'SERVER', socket.userName + ' has connected to this game');

  });
  socket.on('disconnect', function() {
    socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.userName + ' has left this game');
  });
});

/* WEB HANDLERS */
app.get('/', function (req, res) {
  res.render('index', { title: 'Users online?' });
});

app.get('/join/:id', function (req, res) {
  const roomID = req.params.id;
  res.render('index', { id: roomID });
});

server.listen(3000, function () {
  console.log('App listening on port 3000!');
});