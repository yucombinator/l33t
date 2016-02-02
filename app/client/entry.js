import io from 'socket.io-client';
import Typer from './Typer.js';
import Mousetrap from './mousetrap-global-bind.min.js';

// models
import ScoreModel from './Model/ScoreModel.js';
import SliderModel from './Model/SliderModel.js';

require('./scss/style.scss');
require('./scss/crt_style.css');
require('./scss/animate.css');
require('./scss/grid.scss');

var MAX_KEY_SPEED = 40;
var MAX_KEY_UNIQUENESS = 20;

var UNIQUENESS_SCORE_WEIGHT = 0.5;
var SPEED_SCORE_WEIGHT = 0.5;

var mCurrentSliderPosition = 0;
var mGoalSliderPosition = 0;

var mCurrentUser;

var mRoster; // does not include current user

var socket = io();

// init models
var scoreModel = new ScoreModel(socket);
var sliderModel = new SliderModel(socket);

function populateRoster(roster, currentUser) {
  	var rosterString = "";
  	for(var i = 0 ; i < roster.length ; i++) {
  		if (currentUser && currentUser.userName == roster[i].userName) {
  			rosterString = "Agents: </br>>> " + roster[i].userName + "</br>" + rosterString;	
  		} else {
  			rosterString += roster[i].userName + "</br>";
  		}
  	}
  	$("#roster").html(rosterString);
}

function handleShortcutPress(action){
	socket.emit('sendEventPress', {
		action: action,
	});
}

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
  	mCurrentUser = data.user;
    sliderModel.setScoreZoneLeft(data.gameConfig.scoreZoneLeft);
    sliderModel.setScoreZoneRight(data.gameConfig.scoreZoneRight);

  	//mScoreZoneLeftIndex = data.gameConfig.scoreZoneLeft == null ? null : data.gameConfig.scoreZoneLeft * SLIDER_WIDTH;
  	//mScoreZoneRightIndex = data.gameConfig.scoreZoneRight == null ? null : data.gameConfig.scoreZoneRight * SLIDER_WIDTH;
  	populateRoster(mRoster, mCurrentUser);
    populateUserEvents(data.userEvents);
  });

  socket.on('newGameData', function(msg){
  	mGoalSliderPosition = msg.average / 100 * (SLIDER_WIDTH - 1);
    scoreModel.set(msg.score);
  });

  socket.on('newEvent', function(msg){
    handleEventShow(msg);
  });

  socket.on('eventResolved', function(reply){
    if(reply.allGood){
      $("#events").html('');
    }
  });

  socket.on('broadcast-userschanged', function(msg) {
  	mRoster = msg.value;
  	populateRoster(mRoster, mCurrentUser);
  });
});
    
var _this = this;

var mKeyPresses = [];
var typer = new Typer($("#console"), function(keyCode) {
	mKeyPresses.push(keyCode);
});

setInterval(function() {
	var uniqueCount = mKeyPresses.length == 0 ? 0 : 1; // measure of uniqueness
	var current = mKeyPresses[0];	
	mKeyPresses.sort();
	var i = 0;
	for (; i < mKeyPresses.length ; i++) {
		if (mKeyPresses[i] != current) {
			current = mKeyPresses[i];
			uniqueCount ++;
		}
	}
	var speed = mKeyPresses.length;
	// send keys/second
	speed = speed > MAX_KEY_SPEED ? MAX_KEY_SPEED : speed;
	uniqueCount = uniqueCount > MAX_KEY_UNIQUENESS ? MAX_KEY_UNIQUENESS : uniqueCount; 

	var score = 100 * UNIQUENESS_SCORE_WEIGHT * uniqueCount/MAX_KEY_UNIQUENESS + 
				100 * SPEED_SCORE_WEIGHT * speed/MAX_KEY_SPEED;
	socket.emit('sendKeyScore', {
		rate: score
	})
	mKeyPresses = [];
}, 1000); // inizialize timer for sending key press factor over socket

