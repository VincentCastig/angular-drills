angular.module('myApp').controller('myCtrl', function($scope, myService){
  $scope.test = myService.test

})
