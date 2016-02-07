'use strict';

//import Vue from 'Vue';
import Clipboard from 'clipboard';


export default class CopyLinkController {

	constructor () {
    this.clipboard = new Clipboard('#copy-link');
    this.clipboard.on('success', function(e) {
      e.trigger.text = "Copied!"
      setTimeout(() => {
        e.trigger.text = "Invite Friends"
      }, 2000);
    });

    //Vue is not needed for now
		//this.mVueModelObject = new Vue({
		//	el: '#copy-link',
		//});
		//new Vue(this.mVueModelObject);
	}
  
}