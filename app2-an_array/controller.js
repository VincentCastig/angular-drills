angular.module('arrayApp').controller('arrayController', function($scope,myService){

  $scope.arr = myService.myData

})
