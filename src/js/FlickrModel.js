
(function(window) {

  'use strict';

  function FlickrModel() {
    
  }

  FlickrModel.prototype.getPhotos = function() {
    
    //Flickr API endpoint
    var url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=96578407c5bbaa9a8b6f62911aac1a98&user_id=40248662%40N07&format=json&nojsoncallback=1&auth_token=72157657418066722-ace9a361b6eeecf1&api_sig=3b0d4c416fbeb9b6a67fef33df70a4d2';

      //creates a promise
      var promise = $.ajax({url: url});

      //returns the promise 
        //returns and calls getData 
        //to get the data we need and return it
      return promise.then(function(response) {

        //creates and returns a mixin of photo objects
        return getData(response.photos.photo);

      }, function(error) {

        console.log(error);

      });

    }

    function getData(result) {

      //Creates a mixin of photo obejects
      //so that the data returned is the 
      //desired data for the request 

      var photoID, serverID, farmID, secretID, titles = '',
          photoMixins = [];

      //mapping out the desired data
      photoMixins = result.map( function(result, index){


        if (result.id) {
          photoID = result.id.toString();
        }
        if (result.server) {
          serverID = result.server.toString();
        }
        if (result.farm) {
          farmID = result.farm;
        }
        if (result.secret) {
          secretID = result.secret.toString();
        }
        if (result.title) {
          titles = result.title.toString();
        }

        //create new photo
        var newphoto = {

          id: photoID,

          serverID: serverID,

          farmID: farmID,

          secretID: secretID,

          title: titles
        }

        //returns the photomixin to the
        //photoMixins array
        return newphoto;

      });

      //getData reutnrs the final mixin for the request
      return photoMixins;
    
   }


 //export to window
  window.app = window.app || {};
  window.app.FlickrModel = FlickrModel;
  
})(window);