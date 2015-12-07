var app = angular.module('app', ['ui.grid']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  var url = 'http://localhost:1212/getangularusers';

  $http.get(url)
    .success(function(data) {
      $scope.myData = data;
    });

// This is another way to get the data statically
/*
  $scope.myData = [
    {
        "username": "iris",
        "password": "x1",
        "email": "iris@me.com"
    },
    {
        "username": "hb",
        "password": "x2",
        "email": "hb@she.com"
    },
    {
        "username": "mike",
        "password": "x3",
        "email": "mike@he.com"
    }
  ];
*/
}]);
