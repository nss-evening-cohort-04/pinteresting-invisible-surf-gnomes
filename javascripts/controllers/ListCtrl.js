"use strict";

app.controller("ListCtrl", function($scope, $rootScope, BoardFactory){
	
	$scope.boards = [];

	let getBoards = function(){
		BoardFactory.getBoardsFB($rootScope.user.uid).then(function(boardsFB){
			console.log("boards from controller", boardsFB);
			$scope.boards = boardsFB;
		});
	};
	getBoards();	

	$scope.deleteBoard = function(boardId){
		console.log("delete item", boardId);
		BoardFactory.deleteBoardFB(boardId).then(function(response){
			getBoards();
		});
	};

	$scope.inputChange = function(thingy){
		BoardFactory.editItem(thingy).then(function(response){
		});
	};

});