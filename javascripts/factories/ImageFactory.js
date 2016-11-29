"use strict";

let ImgurApiKeys = {};

app.factory("ImageFactory",function($q, $http, IMGURAPIKEY){

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
					console.log('imgur response', response);
					// resolve(response.data.items);

				}, (errorResponse) => {
					console.log('imgur fail', errorResponse);
					// reject(errorResponse2);
				});	
		});
	};

	return {imageList: imageList};
});

