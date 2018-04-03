'use strict';

angular.module('eventsApp')
  .service('Client', function() {

    var _settings;
    var _sessionId;
    var _doclet;

    this.getSessionId = function() {
      return this._sessionId;
    };

    this.setSessionId = function(sessionId) {
      this._sessionId = sessionId;
    };

    this.setDoclet = function(doclet) {
      if (doclet !== undefined) {
        this._doclet = doclet;
      }
    };

    this.getDoclet = function() {
      return this._doclet;
    };

    this.setSettings = function(settings) {
      this._settings = settings;
    };

    this.getSettings = function() {
      return this._settings;
    };

  });
