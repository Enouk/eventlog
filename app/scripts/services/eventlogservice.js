'use strict';

angular.module('eventsApp')
  .service('EventlogService', function ($http) {

  	var docletId = 'defect';

	this.list = function() {
      return $http.get('/api/doclet/' + docletId + '/bucket/events');
    };

    this.details = function(Id) {
		return $http.get('/api/doclet/' + docletId + '/bucket/events-details/' + Id);
    };

  });
