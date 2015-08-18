#What is Flickr Widget?

Flickr Widget is a widget I created and started last year. It was more of a an experiment that allowed me to learn how to work with social Api's. Basically, It displays photos from my account via image gallery.


<a href="http://kpingul.github.io/Flickr-App">View here</a>

#Application Folder Structure

<img src="http://i84.photobucket.com/albums/k34/kdiggz415/flickrAppFolderStructure_2.png"/>

Since this was a very small widget, the folder structure is organized by the app and separated into the model and view.

#Requirements

-<a href="https://www.npmjs.com">npm</a>

-<a href="http://bower.io">bower</a>

#Dependencies

<b>Package.json</b>
<pre>
"express": "^4.12.4",
"gulp": "^3.9.0",
"gulp-minify-css": "^1.2.0",
"gulp-rename": "^1.2.2",
"gulp-concat": "^2.6.0",
"gulp-uglify": "^1.2.0"
</pre>

<b>Bower.json</b>
<pre>
"jquery": "~2.1.4",
"bootstrap": "~3.3.5",
"Justified-Gallery": "~3.6.0",
"handlebars": "~3.0.3",
"jquery-colorbox": "~1.6.2"
</pre>

#Installation

Image Widget can be installed simply by:

<ul>
  <li>Cloning this repo</li>
  <li>change directory to Flickr-App</li>
  <li><a href="https://www.npmjs.com">npm</a> - <code>npm install for dev dependencies</code></li>
  <li><a href="http://bower.io">bower</a> - <code>bower install for front end dependencies</code></li>
</ul>

#Features

<b>The application and UI is built with <a href="http://www.jquery.com">jQuery</a>(write less do more) and <a href="http://handlebarsjs.com/">Handlebars.js</a>(minimal templating on steroids)</b>

Features include:

<ul>
  <li>Responsive image gallery</li>
  <li>Lightbox to display the photos</li>
</ul>

Here are the dependencies that I'm to build out the cross browser UI.

<ul>
  <li><a href="http://miromannino.github.io/Justified-Gallery/getting-started/">Justified Gallery</a>(This is a JQuery plugin which allows you to create responsive, infinite, and high quality justified gallery of images) created by <a href="https://github.com/miromannino">Miro Mannino</a></li>
  <li><a href="http://www.jacklmoore.com/colorbox/">Colorbox</a>(A lightweight customizable lightbox plugin for jQuery) created by <a href="https://github.com/jackmoore">Jack Moore</a> that allows the users to view the light box.</li>
</ul>

#Getting up and runnning

Once you've installed the dependencies, you can:

<code>Run node server.js</code> and locate to your local host on port 8080 localhost:8080

#Changelog

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









