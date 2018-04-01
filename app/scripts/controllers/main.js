'use strict';

angular.module('eventsApp')
  .controller('MainCtrl', function($scope, $location, Client, EventlogService, DocletService) {

    // $scope.events = [{
    //   Start: '2018-03-04 18:11:40',
    //   End: '2018-03-04 18:11:45',
    //   Duration: '5sec 3ms',
    //   Classification: 'GOOD',
    //   Samples: '30',
    //   Image: ''
    // }, {
    //   Start: '2018-03-04 18:11:47',
    //   End: '2018-03-04 18:11:53',
    //   Duration: '5sec 3ms',
    //   Classification: 'BAD',
    //   Samples: '25',
    //   Image: 'sdsdd'
    // }];


    // Fetch and store the doclet
    if (Client.getDoclet() === undefined) {

      var docletId = $location.search().docletId;

      DocletService.fetchById(docletId)
        .then(
          function(response) {
            Client.setDoclet(response.data);
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to fetch application';
          }
        )
    }

    EventlogService.list()
      .then(
        function(response) {
          var events = $scope.values(response.data);
          $scope.events = [];
          for (var i = 0; i < events.length; i++) {
            var event = events[i];
            $scope.events.push($scope.modelOf(event));
          }
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to fetch events';
        }
      );

    $scope.keys = function(obj) {
      return obj ? Object.keys(obj) : [];
    };

    $scope.values = function(obj) {
      return obj ? Object.values(obj) : [];
    };

    $scope.modelOf = function(dto) {
      return {
        // Id: dto.id,
        Camera: dto.cameraid,
        Started: new Date(dto.started),
        Ended: new Date(dto.ended),
        Duration: new Date(dto.ended - dto.started),
        Classification: dto.classid,
        Samples: dto.id
      }
    }

  });
