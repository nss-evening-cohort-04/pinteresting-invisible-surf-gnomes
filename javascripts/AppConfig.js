"use strict";

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl:'partials/auth.html',
			controller: 'authCtrl'
		})
		.when('/pins/', {
			templateUrl:'partials/searchImgur.html',
			controller: 'searchCtrl'
		})
		.when('', {
			templateUrl:'partials/.html',
			controller: 'Ctrl'
		})
		.when('', {
			templateUrl:'partials/.html',
			controller: 'Ctrl'
		})
		.when('/logout', {
			templateUrl:'partials/auth.html',
			controller: 'authCtrl'
		})
		.otherwise('/');
});