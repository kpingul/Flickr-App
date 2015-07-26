(function(flickrApi){

  'use strict';

    var photos = []

    //required for photo source url for rendering of image on page
    var photoID, serverID, farmID, secretID, titles = '';

    //caching DOM for rendering of photos
    var imageList = $('#basicExample');

    //empty html variable to be used to append onto imagelist element
    var html = '';

     var source   = $("#template").html();
  var template = Handlebars.compile(source);

  // optional, speeds up future uses
  



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



    });



    function postResults(result){

    

      //cache array of photos
      var photo = result.photos.photo;
      console.log(photo)
     
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



      var context = {photos: photos};
      var html    = template(context);

     $('#basicExample').html(html);

    $("#basicExample").justifiedGallery({
        rowHeight :250,
        maxRowHeight: 200,
        randomize: true,
        border: 20,
         rel : 'gallery1',
        lastRow : 'nojustify',
        sizeRangeSuffixes: {
          100 : '_t', // used with images which are less than 100px on the longest side
          240 : '_m', // used with images which are between 100px and 240px on the longest side
          320 : '_n', // ...
          500 : '',
          640 : '_z',
          1024 : '_b' // used which images that are more than 640px on the longest side
        }



    }).on('jg.complete', function () {
    $(this).find('a').colorbox({
        maxWidth : '100%',
        maxHeight : '100%',
        opacity : 0.8,
        transition : 'elastic',
        current : ''
    });
});

    }



}(Flickr));

