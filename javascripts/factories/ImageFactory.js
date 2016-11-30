"use strict";

let ImgurApiKeys = {};

app.factory("ImageFactory",function($q, $http, FIREBASE_CONFIG, IMGURAPIKEY, PinFactory, BoardFactory){

	let imageList = (searchText) => {
		return $q ((resolve, reject)=>{

			let authHeader = 'Client-ID '+`${IMGURAPIKEY.client_id}`;

			$http({
				method:'GET',
				headers:{
					'Authorization': authHeader
				},
				url:`https://api.imgur.com/3/gallery/t/${searchText}`
			}).then( (response) => {
				// console.log('imgur response', response.data.data.items);
				resolve(response.data.items);

			}, (errorResponse) => {
				// console.log('imgur fail', errorResponse);
				reject(errorResponse);
			});	
		});
	};

	let deletePin = function(pinId){
		return $q((resolve, reject)=>{

			$http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
			.success(function(deleteResponse){
				resolve(deleteResponse);
			})
			.error(function(deleteError){
				reject(deleteError);
			});
		});
	};


	return {imageList: imageList,
					deletePin: deletePin
	};
});

