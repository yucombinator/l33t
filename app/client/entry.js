import io from 'socket.io-client';
import Mousetrap from './mousetrap-global-bind.min.js';
import Vue from 'vue';

// models
import ScoreModel from './Model/ScoreModel.js';
import SliderModel from './Model/SliderModel.js';
import ConsoleModel from './Model/ConsoleModel.js';
import RosterModel from './Model/RosterModel.js';
import ShortcutsModel from './Model/ShortcutsModel.js';
import AlertsModel from './Model/AlertsModel.js';
import InputController from './Controller/InputController.js';
import CopyLinkController from './Controller/CopyLinkController.js';

require('./scss/style.scss');
require('./scss/crt_style.css');
require('./scss/animate.css');
require('./scss/grid.scss');

Vue.config.debug = true

var socket = io();
// init models
var scoreModel = new ScoreModel(socket);
var sliderModel = new SliderModel(socket);
var alertsModel = new AlertsModel(socket);
var rosterModel = new RosterModel(socket);
var consoleModel = new ConsoleModel();
var shortcutsModel = new ShortcutsModel();

var inputController = new InputController(socket, consoleModel, shortcutsModel);
var copyLinkController = new CopyLinkController();

socket.on('connect', function () {
  socket.emit('joinRoom', {
    username: null,
    room: roomID,
  }, function(data) {
    rosterModel.setCurrentUser(data.user);
    sliderModel.setScoreZoneLeft(data.gameConfig.scoreZoneLeft);
    sliderModel.setScoreZoneRight(data.gameConfig.scoreZoneRight);
    inputController.setUserEvents(data.userEvents);
  });
});
    

