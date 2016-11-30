"use strict";

app.controller("SearchCtrl", function($scope, $rootScope, $location, ImageFactory, PinFactory){
	$scope.newPin = {};
	$scope.selectedBoard = {};
	$scope.searchImgur= '';
	$scope.searchResults = [];

	let uid = $rootScope.user.uid;

	
	$scope.ImgurSearch = function(){
		ImageFactory.imageList($scope.searchImgur).then(function(response){
			$scope.searchResults = response;
			console.log('search results: ', $scope.searchResults);
		});
	};

	$scope.setPinUrl = function(pinUrl){
		console.log("pin URL: ", pinUrl);
		$scope.newPin.url = pinUrl;
	};

	//pin to board
	$scope.postPin = function(newPin, boardId) {
		$scope.newPin.uid = uid;
		PinFactory.postPin($scope.newPin, boardId).then(function(postPinResponse){
			console.log("new pin id", postPinResponse);
			$location.url("/pins/search");
			$scope.newPin = {};
		});
	};
});
