"use strict";

app.controller("ViewBoardCtrl", function($scope, $routeParams, $rootScope, BoardFactory, PinFactory){
	
	$scope.selectedBoard = {};
	$scope.pins = [];
	let boardId = $routeParams.id;


	//getSelectedBoard
	let getSingleBoard = function(boardId){
		BoardFactory.getSingleBoard(boardId).then(function(board){
			board.id = boardId;
			$scope.selectedBoard = board;
			//get pins for selectedBoard
			PinFactory.getPinsFB($rootScope.user.uid).then(function(pinsFB){
			console.log("pins from controller", pinsFB);
				pinsFB.forEach(function(pin){			
					//console.log('pins', pin);
					if(pin.boardId === board.id){
						$scope.selectedBoard.pins.push(pin);
					}
				});
			});
		});
	};


	$scope.deleteBoard = function(boardId){
		console.log("delete board", boardId);
		BoardFactory.deleteBoardFB(boardId).then(function(response){
			getSingleBoard();
		});
	};




	$scope.deletePin = function(pinId){
		console.log("delete pin", pinId);
		PinFactory.deletePin(pinId).then(function(deletePinResponse){
			console.log("delete pin response", deletePinResponse);
			getSingleBoard();
		});
	};
});