"use strict";

app.controller("ListCtrl", function($scope, $rootScope, BoardFactory){
	
	$scope.boards = [];

	let getBoards = function(){
		BoardFactory.getBoardsFB($rootScope.user.uid).then(function(boardsFB){
			console.log("boards from controller", boardsFB);
			$scope.board = boardsFB;
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

});