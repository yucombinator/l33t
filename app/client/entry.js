import io from 'socket.io-client';
import Mousetrap from './mousetrap-global-bind.min.js';

// models
import ScoreModel from './Model/ScoreModel.js';
import SliderModel from './Model/SliderModel.js';
import ConsoleModel from './Model/ConsoleModel.js';
import RosterModel from './Model/RosterModel.js';
import InputController from './Controller/InputController.js'

require('./scss/style.scss');
require('./scss/crt_style.css');
require('./scss/animate.css');
require('./scss/grid.scss');

var socket = io();
// init models
var scoreModel = new ScoreModel(socket);
var sliderModel = new SliderModel(socket);
var consoleModel = new ConsoleModel();
var rosterModel = new RosterModel(socket);

var inputController = new InputController(socket, consoleModel);

var shortcuts = {};

function populateUserEvents(userEvents) {
  shortcuts = {};
  var output = '<div class="col-1-3"><span class="highlight">SHORTCUTS</span></div>';
  userEvents.forEach((val, index) => {
    var key = '';
    for(; ;){
      //generate until we get a unique letter
      key = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      if(!shortcuts[key]){
        shortcuts[key] = val;
        Mousetrap.bindGlobal(['ctrl+' + key, 'command+' + key], (e) => {
          if (e.preventDefault) {
              e.preventDefault();
          } else {
              // internet explorer
              e.returnValue = false;
          }
          handleShortcutPress(val);
        });
        break;
      }
    }
    output += '<div class="col-1-3">'+
     '<span class="highlight">CTRL-'+ key.toUpperCase() + '</span> ' + val +
     '</div>';
  });
  $("#specialkeys").html(output);
}

const errorAudio = new Audio('/assets/error.mp3');
function handleEventShow(event){
    const output = '<div class="accessDenied bounceIn animated">Press <br>'+ event.userEvent +'</div>';
    $("#events").html(output);

    errorAudio.play();
}

socket.on('connect', function () {
  socket.emit('joinRoom', {
    username: null,
    room: roomID,
  }, function(data) {
    rosterModel.setCurrentUser(data.user);
    sliderModel.setScoreZoneLeft(data.gameConfig.scoreZoneLeft);
    sliderModel.setScoreZoneRight(data.gameConfig.scoreZoneRight);
    populateUserEvents(data.userEvents);
  });

  socket.on('newEvent', function(msg){
    handleEventShow(msg);
  });

  socket.on('eventResolved', function(reply){
    if(reply.allGood){
      $("#events").html('');
    }
  });
});
    
var _this = this;

