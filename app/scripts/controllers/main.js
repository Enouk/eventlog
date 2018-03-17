'use strict';

angular.module('eventsApp')
  .controller('MainCtrl', function($scope, $location, Client) {

    $scope.events = [{
      Start: '2018-03-04 18:11:40',
      End: '2018-03-04 18:11:40',
      Classification: 'GOOD',
      Samples: '30',
      Image: ''
    }, {
      Start: '2018-03-04 18:11:40',
      End: '2018-03-04 18:11:40',
      Classification: 'BAD',
      Samples: '25',
      Image: 'sdsdd'
    }];

    $scope.keys = function(obj) {
      return obj ? Object.keys(obj) : [];
    };

  });
