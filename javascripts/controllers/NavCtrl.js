"use strict";

app.controller("NavCtrl", function($scope){ // NAV CONTROLLER LINE 4 holds a array of nav headers 
	
	$scope.navItems = [{
		name:"Logout",
		url: "#/logout"
	},
	{
		name:"All Items",
		url: "#/pins/list"
	},
	{
		name:"New Item",
		url:"#/pins/search"
	},
	{
		name:"Add Boards",
		url:"#/pins/add"
	}
	];
});
