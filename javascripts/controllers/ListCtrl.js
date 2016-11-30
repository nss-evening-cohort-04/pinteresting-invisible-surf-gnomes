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

	$scope.deleteItem = function(boardId){
		console.log("delete item", boardId);
		BoardFactory.deletePin(boardId).then(function(response){
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
});