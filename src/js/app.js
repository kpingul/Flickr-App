(function() {
	'use strict';

	function Flickr() {
		this.flickrModel = new window.app.FlickrModel();
		this.flickrView = new window.app.FlickrView();
	}

	var flickr = new Flickr();

	flickr.flickrView.render(flickr.flickrModel);


}());