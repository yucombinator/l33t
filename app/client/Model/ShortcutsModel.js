'use strict';

import Vue from 'vue';

export default class ShortcutsModel {

	constructor () {
		var _this = this;
		this.mVueModelObject =  
		{
			el : '#shortcutKeys',
			data : {
				shortCutsToUserEvents : []
			},
			computed : {
				shortcutKeys : function () {
					var output = '<div class="col-1-3"><span class="highlight">SHORTCUTS</span></div>';
					Object.keys(_this.mVueModelObject.data.shortCutsToUserEvents).forEach(function (key) {
						var userEvent = _this.mVueModelObject.data.shortCutsToUserEvents[key];
					    output += '<div class="col-1-3">'+
					     '<span class="highlight">CTRL-'+ key.toUpperCase() + '</span> ' + userEvent + '</div>';
					});
					return output;
				}
			}
		};
		new Vue(this.mVueModelObject);
	}

	setShortCuts(shortCutsToUserEventsMap) {
		this.mVueModelObject.data.shortCutsToUserEvents = shortCutsToUserEventsMap;
	}
}