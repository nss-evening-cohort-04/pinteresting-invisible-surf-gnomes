"use strict";

let ImgurApiKeys = {};
app.factory("ImageFactory",function($q, $http, FIREBASE_CONFIG){
	let imageList = (searchText) => {
		return $q ((resolve, reject)=>{
			$http({
				method:'GET',
				url:'ImgurApiKeys.json'
			}).then((response) => {
				//console.log("response", response);
				ImgurApiKeys = response;
				let authHeader = 'Client-ID '+ImgurApiKeys.client_id;


				$http({
					method:'GET',
					headers:{
						'Authorization': authHeader
					},
					url:`https://api.imgur.com/3/gallery/t/${searchText}`
				}).then( (response2) => {
					// console.log('imgur response', response2.data.items);
					resolve(response2.data.items);

				}, (errorResponse2) => {
					// console.log('imgur fail', errorResponse2);
					reject(errorResponse2);
				});	

			}, (errorResponse) => {
				console.log('errorResponse', errorResponse);
			});
		});
	};
	return {imageList: imageList};
});