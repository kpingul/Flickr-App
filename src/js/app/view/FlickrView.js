
(function(window) {
  'use strict';

    function FlickrView() {

    }

    FlickrView.prototype.render = function(FlickrModel) {

      var gallery = $('#PhotoContainer'),
        sourceTpl = $("#template").html(),
        photoTpl = Handlebars.compile(sourceTpl),
        context = {},
        html = "",
        galleryOptions = {
          rowHeight: 220,
          randomize: true,
          margins: 0,
          rel: 'gallery1',
          lastRow: 'justify',
          sizeRangeSuffixes: {
            100: '_t', // used with images which are less than 100px on the longest side
            240: '_m', // used with images which are between 100px and 240px on the longest side
            320: '_n', // ...
            500: '',
            640: '_z',
            1024: '_b' // used which images that are more than 640px on the longest side
          }
      };

       FlickrModel.getPhotos().then(function(response) {

          context = {
            photos: response
          }
          html = photoTpl(context);
          $(gallery).html(html);

          $(gallery).justifiedGallery(this.galleryOptions)

            .on('jg.complete', handleGalleryEvent)
       
       });

       function handleGalleryEvent() {
           $(this).find('a').colorbox({
                maxWidth: '95%',
                maxHeight: '95%',
                speed: 400,
                opacity: .9,
                fadeOut: 600,
                transition: 'elastic',
                current: ''
            });
       }

    }

 //export to window
  window.app = window.app || {};
  window.app.FlickrView = FlickrView;
  
})(window);