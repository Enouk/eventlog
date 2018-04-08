'use strict';

angular.module('eventsApp')
  .service('EventlogService', function ($http, Client) {

	this.list = function(docletId) {
      return $http.get('/api/doclet/' + docletId + '/bucket/events');
    };

    this.details = function(docletId, Id) {
		return $http.get('/api/doclet/' + docletId + '/bucket/events-details/' + Id);
    };

    this.deleteAll = function(docletId) {
    	return $http.delete('/api/doclet/' + docletId + '/bucket/events-details/_all_');
    };

  });
