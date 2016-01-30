var express = require('express');
var app = express();
app.set('view engine', 'ejs');  
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

app.get('/', function (req, res) {
  res.render('index', { title: 'The index page!' });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});