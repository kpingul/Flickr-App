(function() {
	'use strict';

	function Flickr() {
		this.flickrModel = new app.FlickrModel();
		this.flickrView = new app.FlickrView();
	}

	var flickr = new Flickr();

	flickr.flickrView.render(flickr.flickrModel);


}());