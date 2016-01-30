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
    const username = params.username;
    const roomID = params.room;
    
    //join room with specified ID
    socket.room = roomID;
    socket.userName = username;
    socket.join(roomID);
    
    const msg = socket.userName + ' has connected to this game';
    
    socket.broadcast.to(socket.room).emit('event', msg);
    //io.to('some room').emit('some event'):
    
    console.log(msg + ": " + socket.room);
  });
  
  socket.on('disconnect', function() {
    socket.broadcast.to(socket.room).emit('event', 'SERVER', socket.userName + ' has left this game');
  });
});

/* WEB HANDLERS */
app.get('/', function (req, res) {
  res.render('index', { title: 'Users online?' });
});

app.get('/join/:id', function (req, res) {
  const roomID = req.params.id;
  res.render('index', { room: roomID });
});

server.listen(3000, function () {
  console.log('App listening on port 3000!');
});