import io from 'socket.io-client';
import Typer from './Typer.js';

require('./scss/style.scss');
require('./scss/crt_style.css');
require('./scss/animate.css');
require('./scss/grid.scss');

var MAX_KEY_SPEED = 20;
var MAX_KEY_UNIQUENESS = 20;

var UNIQUENESS_SCORE_WEIGHT = 0.5;
var SPEED_SCORE_WEIGHT = 0.5;

var SLIDER_MAX_ANIMATION_SPEED = 10;

var SLIDER_SCORE_ZONE = "+";
var SLIDER_INACTIVE = "=";
var SLIDER_ACTIVE = "||";
var SLIDER_WIDTH = 130;

var mCurrentSliderPosition = 0;
var mGoalSliderPosition = 0;

var mCurrentUser;
var mScoreZoneLeftIndex = null;
var mScoreZoneRightIndex = null;

var mRoster; // does not include current user

function populateRoster(roster, currentUser) {
  	var rosterString = "";
  	for(var i = 0 ; i < roster.length ; i++) {
  		if (currentUser && currentUser.userName == roster[i].userName) {
  			rosterString = ">> " + roster[i].userName + "</br>" + rosterString;	
  		} else {
  			rosterString += roster[i].userName + "</br>";
  		}
  	}
  	$("#roster").html(rosterString);
}

function renderSlider () {
  	var sliderString = "";
  	for (var i = 0 ; i < SLIDER_WIDTH ; i++) {
  		if (i == mCurrentSliderPosition) {
  			sliderString += SLIDER_ACTIVE;
  		} else if (i >= mScoreZoneLeftIndex && i <= mScoreZoneRightIndex) {
  			sliderString += SLIDER_SCORE_ZONE;
  		} else if (i < mCurrentSliderPosition) {
  			sliderString += SLIDER_INACTIVE;
  		} else if (i > mCurrentSliderPosition) {
  			sliderString += SLIDER_INACTIVE;
  		} 
  	}

  	$("#header").html(sliderString);
}

function calculateCurrentSliderPosition() {
	var speedFactor = Math.abs(mCurrentSliderPosition - mGoalSliderPosition) / (SLIDER_WIDTH - 1) * SLIDER_MAX_ANIMATION_SPEED;
	if (mGoalSliderPosition < mCurrentSliderPosition) {
		mCurrentSliderPosition -= speedFactor; 
	} else if (mGoalSliderPosition > mCurrentSliderPosition) {
		mCurrentSliderPosition += speedFactor;
	}

	if(mCurrentSliderPosition < 0) {
		mCurrentSliderPosition = 0;
	}
	if(mCurrentSliderPosition > SLIDER_WIDTH) {
		mCurrentSliderPosition = SLIDER_WIDTH - 1;
	}
  	mCurrentSliderPosition = Math.round(mCurrentSliderPosition);
}

var shortcuts = {};

function populateUserEvents(userEvents) {
  var output = '<div class="col-1-3">SHORTCUTS</div>';
  userEvents.forEach((val, index) => {
    output += '<div class="col-1-3">'+
     val +
     '</div>';
  });
  $("#specialkeys").append(output);
}

var socket = io();
socket.on('connect', function () {
  socket.emit('joinRoom', {
    username: null,
    room: roomID,
  }, function(data) {
  	mCurrentUser = data.user;
  	mScoreZoneLeftIndex = data.gameConfig.scoreZoneLeft == null ? null : data.gameConfig.scoreZoneLeft * SLIDER_WIDTH;
  	mScoreZoneRightIndex = data.gameConfig.scoreZoneRight == null ? null : data.gameConfig.scoreZoneRight * SLIDER_WIDTH;
  	populateRoster(mRoster, mCurrentUser);
    populateUserEvents(data.userEvents);
    console.log(data);
  });
  socket.on('newAverage', function(msg){
  	mGoalSliderPosition = msg.value / 100 * (SLIDER_WIDTH - 1);
    console.log(mGoalSliderPosition);
  });
  socket.on('broadcast-userschanged', function(msg) {
  	mRoster = msg.value;
  	populateRoster(mRoster, mCurrentUser);
    console.log(msg);
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
	//console.log(score);
	socket.emit('sendScore', {
		rate: score
	})
	mKeyPresses = [];
}, 1000); // inizialize timer for sending key press factor over socket

setInterval(function() {
	calculateCurrentSliderPosition();
  	renderSlider();
}, 100); // inizialize timer for animating the slider position