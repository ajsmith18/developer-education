var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'content/0_overview.html'
          })
	      .when('/:name*', {
           templateUrl: function(urlattr){
               return '/content/' + urlattr.name + '.html';
           },
           controller: 'cfgController'

       });
      //$locationProvider.html5Mode(true);
});

app.controller('cfgController',function($scope){

    /*      
    Here you can handle controller for specific route as well.
    */
});

