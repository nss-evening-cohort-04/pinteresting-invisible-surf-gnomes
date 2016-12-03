"use strict";

app.controller("ViewBoardCtrl", function($scope, $location, $routeParams, $rootScope, BoardFactory, PinFactory){
	
	$scope.selectedBoard = {};
	$scope.pins = [];
	let boardId = $routeParams.id;
	$scope.boardId=$routeParams.id;



	//getSelectedBoard
	BoardFactory.getSingleBoard(boardId).then(function(board){
		console.log('board: ', board);
		$scope.selectedBoard.id = boardId;
		$scope.selectedBoard = board;
		//get pins for selectedBoard
		PinFactory.getPinsFB($rootScope.user.uid).then(function(pinsFB){
		console.log("pins from controller", pinsFB);
			pinsFB.forEach(function(pin){			
				if(pin.boardId === boardId){
					console.log('pins-boardId', pin);
					$scope.pins.push(pin);
				}
			});
		});
	});


	$scope.deleteBoard = function(boardId){
		console.log("delete board", boardId);
		BoardFactory.deleteBoardFB(boardId).then(function(response){
			$location.url("/pins/list");
		});
	};




	$scope.deletePin = function(pinId){
		console.log("delete pin", pinId);
		PinFactory.deletePin(pinId).then(function(deletePinResponse){
			console.log("delete pin response", deletePinResponse);
			//haven't tested yet, should refresh pins after delete.
			PinFactory.getPinsFB($rootScope.user.uid).then(function(pinsFB){
				console.log("pins from controller", pinsFB);
				pinsFB.forEach(function(pin){			
					console.log('pins', pin);
					if(pin.boardId === $scope.selectedBoard.id){
					$scope.selectedBoard.pins.push(pin);
					}
				});
			});
		});
	};
});