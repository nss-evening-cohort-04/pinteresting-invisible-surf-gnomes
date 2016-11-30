"use strict";

let ImgurApiKeys = {};

app.factory("ImageFactory",function($q, $http, FIREBASE_CONFIG, IMGURAPIKEY){

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
					resolve(response.data.data.items);

				}, (errorResponse) => {
					// console.log('imgur fail', errorResponse);
					reject(errorResponse);
				});	
		});
	};

	return {imageList: imageList};
});

