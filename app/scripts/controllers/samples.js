'use strict';

angular.module('eventsApp')
  .controller('SamplesCtrl', function($scope, $location, $timeout, EventlogService) {

    $scope.datapoints = [
    ];
    $scope.datacolumns = [
      { "id": "background", "type": "line", "name": "Background", "color": "orange" },
      { "id": "good", "type": "line", "name": "Good", "color": "darkgreen" },
      { "id": "bad", "type": "line", "name": "Bad", "color": "red" }
    ];
    $scope.datax = { "id": "x" };

    $scope.loadData = function() {

      var Id = $location.search().id;

      EventlogService.details(Id)
        .then(
          function(response) {
            $scope.details = response.data;
            for (var i = 0; i < $scope.details.samples.length; i++) {
              var sample = $scope.details.samples[i];

              switch (sample[0]) {
                case 0:
                  var s = {
                    "x": i,
                    "background": sample[1] * 100,
                    "good": 0,
                    "bad": 0,
                  };
                  $scope.datapoints.push(s);
                  break;
                case 1:
                  var s = {
                    "x": i,
                    "background": 0,
                    "good": sample[1] * 100,
                    "bad": 0,
                  };
                  $scope.datapoints.push(s);
                  break;
                case 2:
                  var s = {
                    "x": i,
                    "background": 0,
                    "good": 0,
                    "bad": sample[1] * 100,
                  };
                  $scope.datapoints.push(s);
                  break;
              }
            }

            //$scope.$apply();
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to fetch event details';
          }
        );
    }

    $timeout($scope.loadData, 100);

  });
