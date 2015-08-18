var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
    minifyCss 	= require('gulp-minify-css'),
	express 	= require('express'),
	app 		= express(),
	port 		= 8080;




var path = {
	bower: 'bower_components/',
	css: 'src/css/'
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
	return gulp.src(['src/js/*.js'])

		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));

});


//Minify CSS files



//minify site stylsheets
gulp.task('stylesCSS', function(){
	return gulp.src([

				path.css + 'stylesheet.css',
				path.bower + 'jquery-colorbox/example3/colorbox.css'

		])
	
		.pipe(concat('stylesheet.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('build/css'));

});


//Javascript files
gulp.task('watchScripts', function(){

	return gulp.watch('src/js/*.js', ['scriptJs']);

})


//CSS files
gulp.task('watchStyles', function(){
	
	return gulp.watch('src/css/*.css', ['stylesCSS']);

});



gulp.task('express', function(){

	app.use(express.static(__dirname + '/'));


	app.listen(port, function(){

		console.log('Server running on port ' + port);
	})

});
 

gulp.task('default', ['express', 'watchScripts', 'watchStyles'])