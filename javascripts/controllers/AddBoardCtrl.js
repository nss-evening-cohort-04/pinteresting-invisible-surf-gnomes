"use strict";

app.controller("AddBoardCtrl", function($scope, $rootScope, $location, BoardFactory){
	
	$scope.newBoard = {};

	$scope.addNewBoard = function(){
		$scope.newBoard.uid = $rootScope.user.uid;
		BoardFactory.postBoardsFB($scope.newBoard).then(function(boardId){
			$location.url("/pins/list");
			$scope.newBoard = {};
		});
	};
});