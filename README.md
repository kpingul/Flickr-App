#<a href="http://www.jquery.com">jQuery</a> and <a href="http://handlebarsjs.com/">Handlebars.js</a> Widget</b>


***

####The sample demo can be found <a href="http://kirckpingul.com/Flickr-App"><b>here</b></a>



##Purpose

The idea is an experiment I created for fun. Basically, it allows users to view photos from my Flickr Account. The small app tries to <b>demonstrate modularity and a separation of concerns between the data and the UI</b>.

##Stack

* Client: <a href="http://www.jquery.com">jQuery</a>(small library for DOM Manipulation) and  <a href="http://handlebarsjs.com/">Handlebars.js</a>(JavaScript templating library)
* CSS: <a href="http://foundation.zurb.com/">Bootstrap</a> (Responsive CSS framework designed for cross browser capabilities)
* Backend : <a href="https://www.flickr.com/services/api/">Flickr API</a>

###Build

* powered by [Gulp.js](http://www.gulpjs.com/)
* build supporting JavaScript and CSS  minification.

##Installation

###Platform & Tools

You need to install [Node.js](http://nodejs.org/) and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js => v0.12.7)
* [Install bower](http://bower.io/), a depedency package manager.

###Grabbing the code

Either clone this repository or fork it on GitHub

<pre>
* https://github.com/kpingul/Flickr-App.git

* cd flickr-app
</pre>

### Dependencies

Since the client application is built using jQuery, handlebars, and other 3rd party libraries, we need to install the local dependencies using [Bower](http://bower.io/) and [npm](http://npmjs.org).

<b>Bower.json</b>
<pre>
"jquery": "~2.1.4",
"bootstrap": "~3.3.5",
"Justified-Gallery": "~3.6.0",
"handlebars": "~3.0.3",
"jquery-colorbox": "~1.6.2"
</pre>

* To Install the front end dependencies run:
<pre> <a href="http://bower.io">bower</a> install</pre>

(This will install the dependencies declared in the /bower.json file)

<b>Package.json</b>
<pre>
"express": "^4.12.4",
"gulp": "^3.9.0",
"gulp-minify-css": "^1.2.0",
"gulp-rename": "^1.2.2",
"gulp-concat": "^2.6.0",
"gulp-uglify": "^1.2.0"
</pre>

* To install our npm dependencies for our build system and server, run: 
<pre><a href="https://www.npmjs.com">npm</a> install </pre>

(This will install the dependencies declared in the /package.json file)

##Running the server

* Once you've installed the dependencies, you can start the server by running the [Node.js](http://nodejs.org/) command:

<pre>node server.js</pre>

* Once it brings up the server, you can start browsing through the application at http://localhost:8080
 
 
##Browser Support
 
jQuery, Handlebars, and Bootstrap will work with the latest versions of Chrome, Firefox, Safari, and Opera, as well as Internet Explorer version 9, 10, and 11.

##Development

###Folders Structure

<img src="http://i84.photobucket.com/albums/k34/kdiggz415/flickrAppFolderStructure_2.png"/>

Since this was a very small widget, the folder structure is organized by the app folder and separated into the model and view creating a more modular approach. 


###Features

Features include:

<ul>
<li><a href="https://www.flickr.com/services/api/">Flickr API</a> that allows users to view photos from my <a href="https://www.flickr.com/">Flickr</a> Account</li>
  <li>Responsive image gallery</li>
  <li>Lightbox to display the photos</li>
</ul>

Here are the dependencies that I'm to build out the cross browser UI.

<ul>
  <li><a href="http://miromannino.github.io/Justified-Gallery/getting-started/">Justified Gallery</a>(This is a JQuery plugin which allows you to create responsive, infinite, and high quality justified gallery of images) created by <a href="https://github.com/miromannino">Miro Mannino</a></li>
  <li><a href="http://www.jacklmoore.com/colorbox/">Colorbox</a>(A lightweight customizable lightbox plugin for jQuery) created by <a href="https://github.com/jackmoore">Jack Moore</a> that allows the users to view the light box.</li>
</ul>

###Changelog

<b>Version 1.0</b>

<ul>
  <li>Structured application into one file called flickr.js</li>
  <li>Used a node <a href="https://github.com/Pomax/node-flickrapi">flickr</a> api wrapper</li>
</ul>

<b>Version 1.0.1</b>

<ul>
  <li>Refactor application using a more modular approach with models and views</li>
  <li>Removed the flickr api library and instead, used Flickr's API endpoints directly using ajax and promises.</li>
  <li>Integrated the express server into my Gulp workflow instead of the server.js file and added watchers for the script and css files.</li>
</ul>


##License

MIT





