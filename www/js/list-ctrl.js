angular.module('starter.controllers')

.controller('ListCtrl', function($scope, $timeout, $state, Lokiwork, json1, rfc4122) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  Lokiwork.getCollection('remgoDB', 'Reminder')
    .then(function(data){
      /*
    Lokiwork.addDocument(json1.db, json1.collection, {
        "id": rfc4122.v4(),
        "label": "",
        "location": {
            accuracy: 20,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude:12.922312699999999,
            longitude:77.6184561,
            speed:null
        },
        "repeat": false,
        "maxRepeatPerDay": 1,
        "timeRange": null
    });
    Lokiwork.addDocument(json1.db, json1.collection, {
        "id": rfc4122.v4(),
        "label": "",
        "location": {
            accuracy: 20,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude:12.122312699999999,
            longitude:77.1184561,
            speed:null
        },
        "repeat": false,
        "maxRepeatPerDay": 1,
        "timeRange": null
    });
      */
    });
});
