'use strict';

import Vue from 'vue';

export default class AlertsModel {

	constructor (socket) {
		var _this = this;
		this.mSocket = socket;
		this.mErrorAudio = new Audio('/assets/error.mp3');
		this.mVueModelObject =  
		{
			el : '#userEvents',
			data : {
				currentUserEvent : ''
			},
			computed : {
				userEvents : function () {
					if (_this.mVueModelObject.data.currentUserEvent == '') {
						return '';
					} else {
    					_this.mErrorAudio.play();
						return '<div class="accessDenied bounceIn animated">Press <br>' + _this.mVueModelObject.data.currentUserEvent + '</div>';
					}
				}
			}
		};
		new Vue(this.mVueModelObject);
		this.registerSockets();
	}

	registerSockets(){
		var _this = this;
		this.mSocket.on('connect', function() {
			_this.mSocket.on('newEvent', function(msg){
				_this.mVueModelObject.data.currentUserEvent = msg.userEvent;
			});

			_this.mSocket.on('eventResolved', function(reply){
				if(reply.allGood){
					_this.mVueModelObject.data.currentUserEvent = '';
				}
			});
		});
	}

}