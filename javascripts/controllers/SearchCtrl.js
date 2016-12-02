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
		$('#searchBtn').button('loading');
		ImageFactory.imageList($scope.searchImgur).then(function(response){
			$('#searchBtn').button('reset');
			$scope.searchResults = response;
			$('#imgurReturn').append('<div ng-repeat="image in searchResults"><img src="{{image.link}}" class="col-sm-3 img-thumbnail img-rounded img-responsive" ng-click="setPinUrl(image.link)" data-toggle="modal" data-target="#newPinModal"></img></div>');
		}).catch((error) => {
			$('#searchBtn').button('reset');
			$('#imgurReturn').append('<div class="alert alert-danger"><strong>Error!<strong>'+ error.statusText +'</div>');
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
