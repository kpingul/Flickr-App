/* Angular App */

(function(flickrApi){

	'use strict';

	angular.module('myApp' ,[])

		.factory('flickrData', function() {
			
			var flickrPhotos = {}
			

			var config = {

    			apiKey: "7fc4618c200ab1549a30ce201d92e058",

    			userId: "40248662@N07",


    			pageNumber: 1,

   				 perPageNumber: 20

  			}



		    var flickr = new flickrApi({

		      api_key: config.apiKey

		    });





		     return {

			  	getData: function(){

			  		var photos = {}


			  		  flickr.people.getPhotos({

			        api_key: config.apiKey,

			        user_id: config.userId,
			         
			        authenticated: true,

			        page: config.pageNumber,

			        per_page: config.perPageNumber

		      }, function(err, result) {
		        /*
		          This will give public results only, even if we used
		          Flickr.authenticate(), because the function does not
		          *require* authentication to run. It just runs with
		          fewer permissions.
		        */
		    		console.log(result.photos.photo	);
		        	return result.photos.photo	       		
		       		
		   		 });

			  }



      		}

		})


		.controller('MainCtrl', ['$scope', 'flickrData', function($scope, flickrData){

				$scope.Photos = flickrData.getData();


		}])
		
			
			





}(Flickr));