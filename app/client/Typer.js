'use strict';
import Howler from 'howler';
/**
 * Class to handle reading key presses and outputting text
 */
export default class Typer {

	constructor(console, keyPressedCallBack){
		this.mFile = "/assets/code_file.txt";
		this.mIndex = 0;
		this.mSpeed = 3;

		this.mConsole = console;
		this.mKeyPressedCallback = keyPressedCallBack;
    this.typeSound = new Howler.Howl({
      urls: ['/assets/keypress.mp3']
    });
    
    const _this = this;

		$( document ).keypress(
			function ( event ) { 
				_this.mKeyPressedCallback(event.keyCode);
				_this.addText.bind(_this)( event ); //Capture the keydown event and call the addText, this is executed on page load
        _this.typeSound.play();
			}
		);

		this.mAccessCountTimer = setInterval(function() {

			var cont=_this.mConsole.html(); // get console 
			if(cont.substring(cont.length - 1, cont.length) == "|") { // if last char is the cursor
				_this.mConsole.html(cont.substring(0, cont.length - 1)); // remove it
			} else {
				_this.mConsole.html(cont +  "|");
			}
		},500); // inizialize timer for blinking cursor
		
		$.get(this.mFile,function(data){// get the text file
			_this.mText=data;// save the textfile in Typer.text
		});

		this.mSpeed = 3;
		this.mIndex = 0;
	}

	write(str) {// append to console content
		this.mConsole.append(str);
		return false;
	}
	
	addText(key) {//Main function to add the code
		if(key.keyCode == 18) {// key 18 = alt key

		} else if(key.keyCode == 20) {// key 20 = caps lock

		} else if(key.keyCode == 27) { // key 27 = esc key

		} else if(this.mText) { // otherway if text is loaded
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
			this.mConsole.scrollTop(this.mConsole[0].scrollHeight);
		}
		if ( key.preventDefault && key.keyCode != 122 ) { // prevent F11(fullscreen) from being blocked
			key.preventDefault()
		}
		if(key.keyCode != 122) { // otherway prevent keys default behavior
			key.returnValue = false;
		}
	}
}