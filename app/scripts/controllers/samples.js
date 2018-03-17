'use strict';

angular.module('eventsApp')
  .controller('SamplesCtrl', function($scope) {
    $scope.events = [{
        id: '11212',
        device: 'camera1',
        samples: [
          { category: 0, score: 0.9 },
          { category: 1, score: 0.95 },
          { category: 1, score: 0.85 },
          { category: 1, score: 0.75 },
          { category: 1, score: 0.77 },
          { category: 1, score: 0.86 },
          { category: 1, score: 0.73 }
        ]
      },
      {
        id: '11213',
        device: 'camera2',
        samples: [
          { category: 0, score: 0.9 },
          { category: 1, score: 0.95 },
          { category: 1, score: 0.85 },
          { category: 1, score: 0.75 },
          { category: 1, score: 0.67 },
          { category: 1, score: 0.56 },
          { category: 1, score: 0.53 }
        ]
      }
    ];

  });
