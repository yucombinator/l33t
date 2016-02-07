'use strict';

import Vue from 'Vue';

const SLIDER_MAX_ANIMATION_SPEED = 30;

const SLIDER_SCORE_ZONE = "+";
const SLIDER_INACTIVE = "=";
const SLIDER_ACTIVE = "||";
const SLIDER_WIDTH = 130;

export default class SliderModel {

	constructor (socket) {
		var _this = this;
		this.mSocket = socket;
		this.mGoalSliderPosition = 0;

		this.mVueModelObject =  
		{
			el : '#slider',
			data : {
				currentSliderPosition : 0
			} ,
			computed : {
				slider : function() {
					var sliderString = "";
				  	var roundedSliderPosition = Math.round(this.currentSliderPosition / 100 * SLIDER_WIDTH);
				  	for (var i = 0 ; i < SLIDER_WIDTH ; i++) {
				  		if (i == roundedSliderPosition) {
				  			sliderString += SLIDER_ACTIVE;
				  		} else if (i >= _this.mVueModelObject.config.scoreZoneLeftIndex && i <= _this.mVueModelObject.config.scoreZoneRightIndex) {
				  			sliderString += SLIDER_SCORE_ZONE;
				  		} else if (i < roundedSliderPosition) {
				  			sliderString += SLIDER_INACTIVE;
				  		} else if (i > roundedSliderPosition) {
				  			sliderString += SLIDER_INACTIVE;
				  		} 
				  	}

				  	return sliderString;
				}
			} , 
			config : {
				scoreZoneLeftIndex : 0.4 * SLIDER_WIDTH,
				scoreZoneRightIndex : 0.6 * SLIDER_WIDTH
			}
		};
		new Vue(this.mVueModelObject);

		this.registerSocketListeners();
		this.initUpdateHandlers();
	}

	registerSocketListeners() {
		var _this = this;
		this.mSocket.on('connect', function() {
			_this.mSocket.on('average', function(msg) {
				_this.mGoalSliderPosition = msg.average / 100 * (SLIDER_WIDTH - 1);
			});
		});
	}

	initUpdateHandlers() {
		var _this = this;
		setInterval(function() {
			_this.calculateCurrentSliderPosition();
		}, 100); // inizialize timer for animating the slider position
	}

	setScoreZoneLeft(value) {
		this.mVueModelObject.config.scoreZoneLeftIndex = value * SLIDER_WIDTH;
	}

	setScoreZoneRight(value) {
		this.mVueModelObject.config.scoreZoneRightIndex = value * SLIDER_WIDTH;
	}

	calculateCurrentSliderPosition() {
		var currentSliderPosition  = this.mVueModelObject.data.currentSliderPosition;
		var speedFactor = Math.abs(currentSliderPosition - this.mGoalSliderPosition) / (SLIDER_WIDTH - 1) * SLIDER_MAX_ANIMATION_SPEED;
		if (this.mGoalSliderPosition < currentSliderPosition) {
			currentSliderPosition -= speedFactor; 
		} else if (this.mGoalSliderPosition > currentSliderPosition) {
			currentSliderPosition += speedFactor;
		}
		if(currentSliderPosition < 0) {
			currentSliderPosition = 0;
		}
		if(currentSliderPosition > SLIDER_WIDTH) {
			currentSliderPosition = SLIDER_WIDTH - 1;
		}
		this.mVueModelObject.data.currentSliderPosition = currentSliderPosition;
	}
}