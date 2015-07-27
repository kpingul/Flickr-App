var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
    minifyCss 	= require('gulp-minify-css');


var path = {
	bower: 'bower_components/'
}


/* Define Tasks*/

//concatenates all javascript dependencies into one file named deps(dependencies).js
gulp.task('dependenciesJS', function(){

	return gulp.src([

			path.bower + 'jquery/dist/jquery.min.js',
			path.bower + 'Justified-Gallery/dist/js/jquery.justifiedGallery.min.js',
			path.bower + 'handlebars/handlebars.min.js',
			path.bower + 'jquery-colorbox/jquery.colorbox.js',
			path.bower + 'flickrapi/browser/flickrapi.js'
		])

		.pipe(concat('dependenciesJS.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));

});




//Uglify all Javascript files


gulp.task('scriptJs', function(){
	return gulp.src(['src/js/flickr.js'])

			.pipe(concat('flickr.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('build/js'));

});


//Minify CSS files



//minify site stylsheets
gulp.task('stylesCSS', function(){
	return gulp.src(['src/css/stylesheet.css'])
	
			.pipe(rename('stylesheet.min.css'))
			.pipe(minifyCss())
			.pipe(gulp.dest('build/css'));

});
