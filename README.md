#What is Flickr Widget?

Flickr Widget is a widget I created a couple months back. It was more of a an experiment that allowed me to learn how to work with social Api's. Basically, It displays photos from my account via image gallery.


<a href="http://kpingul.github.io/Flickr-App">View here</a>

#Application Folder Structure

<img src="http://i84.photobucket.com/albums/k34/kdiggz415/flickrAppFolderStructure.png"/>

#Requirements

-<a href="https://www.npmjs.com">npm</a>

-<a href="http://bower.io">bower</a>

#Dependencies

<Package.json</b>
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
  "devDependencies": {
    "jquery": "~2.1.4",
    "flickrapi": "~0.3.32",
    "bootstrap": "~3.3.5",
    "Justified-Gallery": "~3.6.0",
    "handlebars": "~3.0.3",
    "jquery-colorbox": "~1.6.2",
    "swipebox": "~1.4.1"
  }
</prev>



#Setup Server 

<a href="http://expressjs.com/">Express js</a> run on local host

#Dependencies using Bower

<a href="http://www.getbootstrap.com/">Bootstrap</a> for the repsonsive layout

<a href="https://github.com/miromannino/Justified-Gallery">Justified Gallery</a> jQuery plugin created by <a href="http://miromannino.com/">Miro Mannino</a> 

<a href="http://www.jacklmoore.com/colorbox/">Colorbox lightbox</a> jQuery plugin created by <a href="http://www.jacklmoore.com/">Jack Moore</a>

<a href="https://github.com/Pomax/node-flickrapi">Flickr wrapper with oAuth authentication</a> for serving up the API.


<a href="https://github.com/wycats/handlebars.js/">Handlebars Js</a>  for the templating


#Run

type in command prompt node server.js to start the server on local host














