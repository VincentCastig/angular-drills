angular.module('myApp').controller('myCtrl', function($scope, myService){
  $scope.arr = myService.test
})
