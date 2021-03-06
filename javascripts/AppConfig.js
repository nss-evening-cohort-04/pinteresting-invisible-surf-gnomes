"use strict";

let isAuth = (AuthFactory) =>  new Promise((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);

	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

	  	let logged = AuthFactory.isAuthenticated();
	  	let appTo;

	  	if(currRoute.originalPath){
	  		appTo = currRoute.originalPath.indexOf('/auth') !== -1;	
	  	}
	  	
	  	if(!appTo && !logged){
	  		event.preventDefault();
	  		$location.path('/auth');
	  	}
	});
});

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl:'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/pins/list', {
			templateUrl:'/partials/pin-list.html',
			controller: 'ListCtrl',
			resolve: {isAuth} 
		})
		.when('/pins/add', {
			templateUrl:'/partials/add-board.html',
			controller: 'AddBoardCtrl',
			resolve: {isAuth} 
		})
		.when('/pins/search', {
			templateUrl:'/partials/searchImgur.html',
			controller: 'SearchCtrl',
			resolve: {isAuth} 
		})
		.when('/logout', {
			templateUrl:'partials/auth.html',
			controller: 'AuthCtrl',
			resolve: {isAuth} 
		})
		.otherwise('/auth');
});