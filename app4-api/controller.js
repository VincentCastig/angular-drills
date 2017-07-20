angular.module('apiApp').controller('myCtrl', function($scope, myService){
  $scope.test = myService.test
  myService.getPlanets()
    .then(function(response){
      $scope.planet = response
      console.log(response)
    })
    .catch(function(response){

    })


})
