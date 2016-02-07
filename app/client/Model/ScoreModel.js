'use strict';

import Vue from 'Vue';


export default class ScoreModel {

	constructor (socket) {
		this.mSocket = socket;
		this.mScoreChanged = 0; // 0 for unchanged, -1 for decreased, 1 for increased
		this.mScoreChangedAnimationStep = 0;

		this.mVueModelObject =  
		{
			el : '#score',
			data : {
				score : 0,
				scoreAnimationLeft : '',
				scoreAnimationRight : '',
				scoreDecreased : false
			}
		};
		new Vue(this.mVueModelObject);

		this.registerSocketListeners();
		this.initUpdateHandlers();
	}

	registerSocketListeners() {
		var _this = this;
		this.mSocket.on('connect', function() {
			_this.mSocket.on('score', function(msg) {
				_this.mScoreChanged = msg.score > _this.mVueModelObject.data.score ? 1 : -1;
				if (msg.score == _this.mVueModelObject.data.score) {
					_this.mScoreChanged = 0;
				}
				_this.mVueModelObject.data.score = msg.score;
			});
		});
	}

	initUpdateHandlers() {
		var _this = this;
		setInterval(function() {
			var scoreStringLeft = "";
			var scoreStringRight = "";
			if (_this.mScoreChanged != 0) {
				scoreStringLeft += "<<";
				for (var i = 0 ; i < _this.mScoreChangedAnimationStep ; i++) {
					scoreStringLeft += "<";
				}
				_this.mVueModelObject.data.scoreAnimationLeft = scoreStringLeft;

				for (var i = 0 ; i < _this.mScoreChangedAnimationStep ; i++) {
					scoreStringRight += ">";
				}
				scoreStringRight += ">>";
				_this.mVueModelObject.data.scoreAnimationRight = scoreStringRight;

				_this.mScoreChangedAnimationStep++;
				if (_this.mScoreChanged < 0) {
					_this.mVueModelObject.data.scoreDecreased = true;
				} 
			} else {
				_this.mVueModelObject.data.scoreAnimationLeft = '';
				_this.mVueModelObject.data.scoreAnimationRight = '';
			} 

			if (_this.mScoreChangedAnimationStep == 2) {
				_this.mScoreChangedAnimationStep = 0;
				_this.mScoreChanged = 0;
				_this.mVueModelObject.data.scoreDecreased = false;
				//$("#score").css('color', '#14fdce');
			}
		}, 100); // inizialize timer for animating the slider position
	}
}