var app = angular.module('app', ['ui.grid', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  var url = 'http://localhost:1212/getangularusers';

  $http.get(url)
    .success(function(data) {
      $scope.myData = data;
    });
}]);
