import io from 'socket.io-client';
import Typer from './Typer.js';

require('./scss/style.scss');
require('./scss/crt_style.css');

var socket = io();
socket.on('connect', function () {
  socket.emit('joinRoom', {
    username: 'glados',
    room: roomID,
  });
  socket.on('slider-position', function(msg){
    console.log(msg);
  });
});

var typer = new Typer($("#console"));
