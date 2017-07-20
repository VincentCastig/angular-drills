angular.module('myApp').controller('myCtrl', function($scope, service){
  $scope.test = service.test

})
