'use strict';

angular.module('eventsApp')
  .controller('SettingsCtrl', function($scope, SettingsService, DocletService) {

    $scope.settings = {};

    SettingsService.getAll()
      .then(
        function(response) {
          $scope.settings = response.data;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to fetch settings';
        }
      );

    DocletService.list()
      .then(
        function(response) {
          $scope.applications = response.data;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to fetch apps';
        }
      );

    $scope.applicationChanged = function() {
      var value = {
        id: $scope.settings.application.id,
        name: $scope.settings.application.name
      };
      SettingsService.setValue('application', value);
    };

  });
