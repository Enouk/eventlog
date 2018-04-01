'use strict';

angular.module('eventsApp')
  .service('DocletService', function($http) {

    this.list = function() {
      return $http.get('/api/doclet');
    };

    this.fetchById = function(docletId) {
      return $http.get('/api/doclet/' + docletId);
    };

  });
