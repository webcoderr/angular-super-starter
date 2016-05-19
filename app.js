var app = angular.module('test',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl:'views/layout.html',
			controller:'CategoryCtrl'
		}).
		when('/articles/:id',{
			templateUrl:'views/articles.html',
			controller:'CategoryCtrl'
		}).
		when('/travel',{
			templateUrl:'views/travel.html',
			controller:'CategoryCtrl'
		}).	
		when('/sport',{
			templateUrl:'views/sport.html',
			controller:'CategoryCtrl'
		}).	
		when('/tech',{
			templateUrl:'views/tech.html',
			controller:'CategoryCtrl'
		}).									
		otherwise({redirectTo: '/'});
}]);

