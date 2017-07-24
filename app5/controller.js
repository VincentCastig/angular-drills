angular.module('myApp').controller('myCtrl', function($scope, myService){
  myService.getPlanets().then(function(response){
    $scope.planets = response.data.results
  })

  $scope.addPlanets = function(obj){
    service.addPlanets(obj)

  }

})
