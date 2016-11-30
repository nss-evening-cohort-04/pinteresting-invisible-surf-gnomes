"use strict";


app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){

	var getPinsFB = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="uid"&equalTo="${userId}"`)
			 .success( (response)=>{
			 	let pins = [];
			 	Object.keys(response).forEach((key)=>{
			 		response[key].id = key;
			 		pins.push(response[key]);
			 	});
			 	resolve(pins);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};

	var postPin = function(postPin, boardId){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify({
				boardId: boardId,
				title: postPin.title,
				uid: postPin.uid,
				url: postPin.url
				})
			)
			 .success( (postResponse)=>{
			 	resolve(postResponse);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};

	var deletePin = function(pinId){
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
			 .success( (deleteReponse)=>{
			 	resolve(deleteReponse);
			 })
			 .error( (deleteError)=>{
			 	reject(deleteError);
			 });
		});
	};

	return {getPinsFB: getPinsFB,
			postPin: postPin,
			deletePin: deletePin};
});