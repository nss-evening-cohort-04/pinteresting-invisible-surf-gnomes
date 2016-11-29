"use strict";

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'partials/searchImgur.html',
			controller: 'searchCtrl'
		})
		.otherwise('/');
});