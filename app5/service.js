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
})
