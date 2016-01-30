var express = require('express');
var app = express();
app.set('view engine', 'ejs');  
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

/* SOCKET HANDLERS */
io.on('connection', function(){ 
  
});

/* WEB HANDLERS */
app.get('/', function (req, res) {
  res.render('index', { title: 'The index page!' });
});

app.get('/join/:id', function (req, res) {
  const roomID = req.params.id;
  res.render('index', { id: roomID });
});

server.listen(3000, function () {
  console.log('App listening on port 3000!');
});