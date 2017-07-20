angular.module('myApp').controller('myCtrl', function($scope, myService){
  myService.getPlanets().then(function(response){
    $scope.planets = response.data.results
  })

  $sope.addPlanets = function(obj){
    service.addPlanets(obj).then(function(response){
      $scope.stars = response.data
    })

  })

})
