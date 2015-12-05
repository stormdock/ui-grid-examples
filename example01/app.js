var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

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
}]);
