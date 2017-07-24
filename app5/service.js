angular.module('myApp').service('myService', function($http){

  this.getPlanets = function(){
    return $http.get('//www.swapi.co/api/planets')
    .then(function(response){
        return response;
        console.log(response.data)
    })
    .catch(function(){
      return "error"
    })
}

  this.addPlanet = function(obj){
    return $http({
      method: "POST",
      url: 'www.swapi.co/api/planets',
      data: {star:obj}
  })
}


  })
