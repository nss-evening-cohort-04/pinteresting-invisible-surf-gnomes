"use strict";

app.controller("SearchCtrl", function($scope, $rootScope, $location, ImageFactory, PinFactory){
	$scope.newPin = {};
	$scope.searchImgur= '';
	$scope.searchResults = [];

	
	$scope.ImgurSearch = function(){
		ImageFactory.imageList($scope.searchImgur).then(function(response){
			$scope.searchResults = response;
			console.log('search results: ', $scope.searchResults);
		});
	};
});
