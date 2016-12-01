"use strict";

app.controller("SearchCtrl", function($scope, $rootScope, $location, ImageFactory, PinFactory, BoardFactory){
	$scope.newPin = {};
	$scope.selectedBoard = {};
	$scope.searchImgur= '';
	$scope.searchResults = [];
	$scope.boards = [];

	let uid = $rootScope.user.uid;

	let getBoards = function(){
		BoardFactory.getBoardsFB(uid).then(function(boardArray){
			$scope.boards = boardArray;
		});
	};
	getBoards();

	$scope.ImgurSearch = function(){
		ImageFactory.imageList($scope.searchImgur).then(function(response){
			console.log("response", response);
			$scope.searchResults = response;

			console.log('search results: ', $scope.searchResults);
		});
	};

	$scope.setPinUrl = function(pinUrl){
		console.log("pin URL: ", pinUrl);
		$scope.newPin.url = pinUrl;
	};

	//pin to board
	$scope.postPin = function() {
		$scope.newPin.uid = uid;
		PinFactory.postPin($scope.newPin).then(function(postPinResponse){
			console.log("new pin id", postPinResponse);
			angular.element('#newPinModal').modal('hide');
			$location.url("/pins/search");
			$scope.newPin = {};
		});
	};
});
