'use strict';

import Vue from 'Vue';
import Howler from 'howler';

const MAX_KEY_SPEED = 40;
const MAX_KEY_UNIQUENESS = 20;

const UNIQUENESS_SCORE_WEIGHT = 0.5;
const SPEED_SCORE_WEIGHT = 0.5;

export default class InputController {

	constructor (socket, consoleModel, shortCutsModel) {
		const _this = this;
		this.mSocket = socket;
		this.mConsoleModel = consoleModel;
		this.mShortCutsModel = shortCutsModel;
		// map of shortcut key codes to user events
		this.mShortCutsToUserEvents = {};
    	this.mTypeSound = new Howler.Howl({
      		urls: ['/assets/keypress.mp3']
    	});
    	this.mKeyPresses = [];

		$( document ).keypress(
			function ( event ) { 
				_this.onKeyPressed.bind(_this)(event);
        		_this.mTypeSound.play();
			}
		);

		this.registerUpdateHandlers();
	}

	onKeyPressed (event) {
		this.mKeyPresses.push(event.keyCode);
		if(event.keyCode == 18) {// key 18 = alt key

		} else if(event.keyCode == 20) {// key 20 = caps lock

		} else if(event.keyCode == 27) { // key 27 = esc key

		} else if(this.mConsoleModel.isCodeVisible()) { 
			this.mConsoleModel.addCode();
			// TODO: find a way to do this using Vue
			$("#console").scrollTop($("#console")[0].scrollHeight); 
		}
		if ( event.preventDefault && event.keyCode != 122 ) { // prevent F11(fullscreen) from being blocked
			event.preventDefault()
		}
		if(event.keyCode != 122) { // otherway prevent keys default behavior
			event.returnValue = false;
		}
	}

	handleShortcutPress(action){
		this.mSocket.emit('sendEventPress', {
			action: action,
		});
	}

	registerUpdateHandlers() {
		var _this = this;
		setInterval(function() {
			var uniqueCount = _this.mKeyPresses.length == 0 ? 0 : 1; // measure of uniqueness
			var current = _this.mKeyPresses[0];	
			_this.mKeyPresses.sort();
			var i = 0;
			for (; i < _this.mKeyPresses.length ; i++) {
				if (_this.mKeyPresses[i] != current) {
					current = _this.mKeyPresses[i];
					uniqueCount ++;
				}
			}
			var speed = _this.mKeyPresses.length;
			// send keys/second
			speed = speed > MAX_KEY_SPEED ? MAX_KEY_SPEED : speed;
			uniqueCount = uniqueCount > MAX_KEY_UNIQUENESS ? MAX_KEY_UNIQUENESS : uniqueCount; 

			var score = 100 * UNIQUENESS_SCORE_WEIGHT * uniqueCount/MAX_KEY_UNIQUENESS + 
						100 * SPEED_SCORE_WEIGHT * speed/MAX_KEY_SPEED;
			_this.mSocket.emit('sendKeyScore', {
				rate: score
			})
			_this.mKeyPresses = [];
		}, 1000); // inizialize timer for sending key press factor over socket
	}

	// sets the user events that are used to provide users with random action objectived
	setUserEvents(userEvents) {
		var _this = this;
		userEvents.forEach((val, index) => {
		    var key = '';
		    for(; ;){
		      //generate until we get a unique letter
		      key = String.fromCharCode(97 + Math.floor(Math.random() * 26));
		      if(!_this.mShortCutsToUserEvents[key]){
		        _this.mShortCutsToUserEvents[key] = val;
		        Mousetrap.bindGlobal(['ctrl+' + key, 'command+' + key], (e) => {
		          if (e.preventDefault) {
		              e.preventDefault();
		          } else {
		              // internet explorer
		              e.returnValue = false;
		          }
		          _this.handleShortcutPress.bind(_this)(val);
		        });
		        break;
		      }
		    }
        });
		_this.mShortCutsModel.setShortCuts(_this.mShortCutsToUserEvents);
	}
}