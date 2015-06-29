var flickr = new Flickr({
  api_key: "7fc4618c200ab1549a30ce201d92e058"
});

/* sends request to flickr api to get photos */

flickr.people.getPhotos({
  api_key: '7fc4618c200ab1549a30ce201d92e058',
  user_id: '40248662@N07',
   
  authenticated: true,

  page: 1,
  per_page: 10
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
    var photos = []

  //required for photo source url for rendering of image on page
  var photoID, serverID, farmID, secretID, titles = '';

  //caching DOM for rendering of photos
  var imageList = $('.list');

  //empty html variable to be used to append onto imagelist element
  var html = '';


  // 
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

      var newphoto = {
        id: photoID,
        serverID: serverID,
        farmID: farmID,
        secretID: secretID,
        title: titles
      }

      photos.push(newphoto);

  }


  for(var index = 0; index < photos.length; index++) {

    //source photo URL from flickr API 
    html = '<li><a href= "https://farm' + photos[index].farmID + '.staticflickr.com/' + photos[index].serverID + '/' + photos[index].id + '_' + photos[index].secretID + '.jpg" title="' + photos[index].title + '" data-gallery> <img src= "https://farm' + photos[index].farmID + '.staticflickr.com/' + photos[index].serverID + '/' + photos[index].id + '_' + photos[index].secretID + '_b.jpg" class="img-rounded styleimg" width="200" height="200"></a></li>';

    imageList.append(html);
  }


  

}

