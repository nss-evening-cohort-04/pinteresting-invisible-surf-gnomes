"use strict";

app.controller("NavCtrl", function($scope, $rootScope){ // NAV CONTROLLER LINE 4 holds a array of nav headers 

	

	$scope.navItems = [{
		name:"Logout",
		url: "#/logout"
	},
	{
		name:"All Boards",
		url: "#/pins/list"
	},
	{
		name:"New Pin",
		url:"#/pins/search"
	},
	{
		name:"Add Boards",
		url:"#/pins/add"
	}
	];
});
