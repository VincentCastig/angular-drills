angular.module('apiApp').service('myService', function($http){



  this.getPlanets = function(){
    return $http.get('http://www.swapi.co/api/planets')
      .then(function(response){
        return response.data.results
      })
  }


})
