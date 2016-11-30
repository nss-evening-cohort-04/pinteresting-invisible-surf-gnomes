"use strict";

app.controller("ListCtrl", function($scope, $rootScope, BoardFactory, PinFactory){
	
	$scope.boards = [];
	$scope.pins = [];

	//Boards
	let getBoards = function(){
		BoardFactory.getBoardsFB($rootScope.user.uid).then(function(boardsFB){
			console.log("boards from controller", boardsFB);
			$scope.boards = boardsFB;
		});
	};
	getBoards();	

	$scope.deleteBoard = function(boardId){
		console.log("delete board", boardId);
		BoardFactory.deleteBoardFB(boardId).then(function(response){
			getBoards();
		});
	};

	$scope.inputChange = function(thingy){
		BoardFactory.editItem(thingy).then(function(response){
		});
	};

	//Pins
	let getPins = function(){
		PinFactory.getPinsFB($rootScope.user.uid).then(function(pinsFB){
			console.log("pins from controller", pinsFB);
			$scope.pins = pinsFB;
		});
	};
	getPins();

	let deletePin = function(pinId){
		console.log("delete pin", pinId);
		PinFactory.deletePin(pinId).then(function(deletePinResponse){
			console.log("delete pin response", deletePinResponse);
			getPins();
		});
	};
});