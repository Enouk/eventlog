'use strict';

angular.module('eventsApp')
  .controller('MainCtrl', function($scope, $location, Client, EventlogService, DocletService, SettingsService) {

    // Fetch and store the doclet
    if (Client.getDoclet() === undefined) {

      var docletId = $location.search().docletId;

      // First fetch the doclet
      DocletService.fetchById(docletId)
        .then(
          function(response) {
            Client.setDoclet(response.data);

            // then fetch all the settings
            SettingsService.getAll()
              .then(
                function(response) {
                  $scope.settings = response.data;
                  Client.setSettings(response.data);

                  var application = response.data.application;

                  // then all the events
                  $scope.info = "Loading events";

                  EventlogService.list(application.id)
                    .then(
                      function(response) {
                        var events = $scope.values(response.data);
                        $scope.events = [];
                        for (var i = 0; i < events.length; i++) {
                          var event = events[i];
                          $scope.events.push($scope.modelOf(event));
                        }
                        Client.setEvents($scope.events);
                        $scope.info = undefined;
                      },
                      function() {
                        $scope.info = undefined;
                        $scope.error = 'Failed to fetch events';
                      }
                    );
                },
                function() {
                  $scope.info = undefined;
                  $scope.error = 'Failed to fetch settings';
                }
              );
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to fetch application';
          }
        )
    } else {

      var settings = Client.getSettings();
      var application = settings.application;

      $scope.events = Client.getEvents();
    }

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
        Duration: dto.duration / 1000,
        Classification: dto.classid,
        Samples: dto.id
      }
    }

    $scope.deleteAll = function() {

      var doclet = Client.getDoclet();

      EventlogService.deleteAll(doclet.id);
    }

  });
