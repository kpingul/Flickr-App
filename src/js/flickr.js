(function(flickrApi){

  'use strict';

  var config = {

    apiKey: "7fc4618c200ab1549a30ce201d92e058",

    userId: "40248662@N07",


    pageNumber: 1,

    perPageNumber: 20

  }

    var flickr = new flickrApi({

      api_key: config.apiKey

    });

    /* sends request to flickr api to get photos */

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
      postResults(result);


    });z



    function postResults(result){

        var photos = []

      //required for photo source url for rendering of image on page
      var photoID, serverID, farmID, secretID, titles = '';

      //caching DOM for rendering of photos
      var imageList = $('.list');

      //empty html variable to be used to append onto imagelist element
      var html = '';


      //cache array of photos
      var photo = result.photos.photo;

     
      for(var i = 0; i < photo.length; i++) {

          if(photo[i].id) {
            photoID = photo[i].id.toString();
          }
          if(photo[i].server){
            serverID = photo[i].server.toString();
          }
          if(photo[i].farm){
            farmID = photo[i].farm;
          }
          if(photo[i].secret){
            secretID = photo[i].secret.toString();
          }
          if(photo[i].title){
            titles = photo[i].title.toString();
          }

          //create new photo
          var newphoto = {

            id: photoID,

            serverID: serverID,

            farmID: farmID,

            secretID: secretID,

            title: titles
          }

          photos.push(newphoto);

      }


      for(var index = 0, max = photos.length; index < max; index+=1 ) {

        //source photo URL from flickr API 
        html = '<li><a href= "https://farm' + photos[index].farmID + '.staticflickr.com/' + photos[index].serverID + '/' + photos[index].id + '_' + photos[index].secretID + '.jpg" title="' + photos[index].title + '" data-gallery> <img src= "https://farm' + photos[index].farmID + '.staticflickr.com/' + photos[index].serverID + '/' + photos[index].id + '_' + photos[index].secretID + '_b.jpg" class="img-rounded styleimg " width="200" height="200"></a></li>';

        imageList.append(html);
      }


      

    }


}(Flickr));

