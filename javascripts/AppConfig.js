"use strict";

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl:'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/pins/list', {
			templateUrl:'/partials/pin-list.html',
			controller: 'listCtrl',
			resolve: {isAuth} 
		})
		.when('/pins/search', {
			templateUrl:'/partials/searchImgur.html',
			controller: 'searchCtrl',
			resolve: {isAuth} 
		})
		.when('/pins/list', {
			templateUrl:'/partials/pin-list.html',
			controller: 'deleteCtrl',
			resolve: {isAuth} 
		})
		.when('/logout', {
			templateUrl:'partials/auth.html',
			controller: 'authCtrl',
			resolve: {isAuth} 
		})
		.otherwise('/');
});