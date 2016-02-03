'use strict';

import Vue from 'Vue';

export default class ConsoleModel {

	constructor (socket) {
		var _this = this;
		this.mFile = "/assets/code_file.txt";
		this.mIndex = 0;
		this.mSpeed = 3;

		$.get(this.mFile, function(data){// get the text file
			_this.mText=data;// save the textfile in mText
		});

		this.mVueModelObject =  
		{
			el : '#console',
			data : {
				visibleCode : ''
			}
		};
		new Vue(this.mVueModelObject);

		this.registerUpdateHandlers();
	}

	registerUpdateHandlers () {
		var _this = this;
		this.mAccessCountTimer = setInterval(function() {
			var cont=_this.mVueModelObject.data.visibleCode; // get console 
			if(cont.substring(cont.length - 1, cont.length) == "|") { // if last char is the cursor
				_this.mVueModelObject.data.visibleCode = cont.substring(0, cont.length - 1); // remove it
			} else {
				_this.mVueModelObject.data.visibleCode = cont + "|";
			}
		},500); // inizialize timer for blinking cursor
	}

	write(str) {// append to console content
		this.mVueModelObject.data.visibleCode += str;
		return false;
	}

	// shows some code in the console
	addCode() {
		var cont = this.mConsole.html(); // get the console content

		if(cont.substring(cont.length - 1, cont.length) == "|") { // if the last char is the blinking cursor
			this.mConsole.html(cont.substring(0, cont.length - 1)); // remove it before adding the text
		}

		if(key.keyCode != 8) { // if key is not backspace
			this.mIndex += this.mSpeed;	// add to the index the speed

		}else if(this.mIndex > 0) {// else if index is not less than 0 
			this.mIndex -= this.mSpeed;//	remove speed for deleting text

		}

		var text=$("<div/>").text(this.mText.substring(0, this.mIndex)).html();// parse the text for stripping html enities
		var rtn= new RegExp("\n", "g"); // newline regex
		var rts= new RegExp("\\s", "g"); // whitespace regex
		var rtt= new RegExp("\\t", "g"); // tab regex
		this.mConsole.html(text.replace(rtn, "<br/>")
									  .replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;")
									  .replace(rts, "&nbsp;"));// replace newline chars with br, tabs with 4 space and blanks with an html blank
	}

	isCodeVisible() {
		return mVueModelObject.data.visibleCode != '';
	}
}