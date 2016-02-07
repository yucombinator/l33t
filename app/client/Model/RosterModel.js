'use strict';

import Vue from 'Vue';


export default class RosterModel {

	constructor (socket) {
		this.mSocket = socket;
		this.mCurrentUser = null;
		this.mVueModelObject = new Vue({
			el: '#roster',
			data: {
				users: []
			}
		});

		new Vue(this.mVueModelObject);

		this.registerSocketListeners();
	}

	registerSocketListeners() {
		var _this = this;
		
		this.mSocket.on('connect', function() {
			_this.mSocket.on('broadcast-userschanged', function(msg) {
				_this.mVueModelObject.users = msg.value;
				_this.reOrderCurrentUserOnTop();
			});
		});
	}

	setCurrentUser(user) {
		this.mCurrentUser = user;
		this.reOrderCurrentUserOnTop();
	}

	reOrderCurrentUserOnTop() {
		if (this.mCurrentUser) {
			var i = 0;
			for (;i < this.mVueModelObject.users.length ; i++) {
				if (this.mVueModelObject.users[i].userName == this.mCurrentUser.userName) {
					break;
				}
			}
			this.mVueModelObject.users.splice(i, 1);
			this.mVueModelObject.users.unshift(this.mCurrentUser);
		}
	}	
}