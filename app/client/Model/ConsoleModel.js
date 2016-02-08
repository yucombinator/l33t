'use strict';

import Vue from 'vue';

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
		var cont = this.mVueModelObject.data.visibleCode; // get the console content

		if(cont.substring(cont.length - 1, cont.length) == "|") { // if the last char is the blinking cursor
			this.mVueModelObject.data.visibleCode = cont.substring(0, cont.length - 1); // remove it before adding the text
		}

		this.mIndex += this.mSpeed;

    //loop back
    if (this.mIndex > this.mText.length){
      this.mIndex = this.mSpeed;
    }

    var text=this.mText.substring(this.mIndex - this.mSpeed, this.mIndex);// parse the text for stripping html enities
    var rtn= new RegExp("\n", "g"); // newline regex
		var rts= new RegExp("\\s", "g"); // whitespace regex
		var rtt= new RegExp("\\t", "g"); // tab regex
		this.mVueModelObject.data.visibleCode = this.mVueModelObject.data.visibleCode.concat(text.replace(rtn, "<br/>"))
									  .replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;")
									  .replace(rts, "&nbsp;");// replace newline chars with br, tabs with 4 space and blanks with an html blank
	}

	isCodeVisible() {
		return this.mVueModelObject.data.visibleCode != '';
	}
}