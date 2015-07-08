var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
    minifyCss 	= require('gulp-minify-css');


/* Define Tasks*/

//concatenates all javascript dependencies into one file named deps(dependencies).js
gulp.task('depsJs', function(){

	return gulp.src([

			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
			'bower_components/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js',
			'bower_components/flickrapi/browser/flickrapi.js'
		])

		.pipe(concat('deps.js'))
		.pipe(gulp.dest('src'));

});


//takes the concatenated dependecies and uglifies them AND stores them into a folder named bin
gulp.task('depsDist', function(){

	return gulp.src(['src/deps.js'])

			.pipe(rename('deps.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('bin'));

});

//Uglify all Javascript files


gulp.task('scriptJs', function(){
	return gulp.src(['src/js/flickr.js'])

			.pipe(concat('flickr.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('bin'));

});


//Minify CSS files


//minify css dependencies

gulp.task('depsCSS', function(){

	return gulp.src([
			'bower_components/bootstrap/dist/css/bootstrap.min.css',
			'bower_components/blueimp-gallery/css/blueimp-gallery.min.css'
		])
		.pipe(concat('deps.css'))
		.pipe(gulp.dest('src'));

})

gulp.task('depsDistCss', function(){
	return gulp.src(['src/deps.css'])

			.pipe(rename('deps.min.css'))
			.pipe(minifyCss())
			.pipe(gulp.dest('bin'));
})




//minify site stylsheets
gulp.task('linkCSS', function(){
	return gulp.src(['src/css/stylesheet.css'])

			.pipe(rename('stylesheet.min.css'))
			.pipe(minifyCss())
			.pipe(gulp.dest('bin'));

});
