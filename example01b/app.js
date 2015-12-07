var app = angular.module('app', ['ui.grid', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav']);

app.controller('MainCtrl', ['$scope', '$http', '$q', '$interval', function ($scope, $http, $q, $interval) {
  $scope.gridOptions = {};

  $scope.gridOptions.columnDefs = [
    { name: 'id', enableCellEdit: false },
    { name: 'name', displayName: 'Name (editable)' },
    { name: 'gender' },
    { name: 'age', displayName: 'Age' , type: 'number'},
    { name: 'registered', displayName: 'Registered' , type: 'date', cellFilter: 'date:"yyyy-MM-dd"'},
    { name: 'isActive', displayName: 'Active', type: 'boolean'}
  ];

  $scope.saveRow = function( rowEntity ) {
    // create a fake promise - normally you'd use the promise returned by $http or $resource
    var promise = $q.defer();
    $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );

    // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
    $interval( function() {
      promise.resolve();
      }, 3000, 1);
  };

  $scope.gridOptions.onRegisterApi = function(gridApi){
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };

  var url = 'http://localhost:1212/getangularusers';

  $http.get(url)
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
}]);
