/*eslint-env node */

var gulp = require('gulp');
var gutil = require('gulp-util');


/* *************
	CSS
************* */

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var scss = require('postcss-scss');
var autoprefixer = require('autoprefixer');

var postcssProcessors = [
	autoprefixer( {
		browsers: 'last 2 versions'
	} )
];

var sassMainFile = 'src/sass/main.scss';
var sassFiles = 'src/sass/**/*.scss';

gulp.task('css', function() {
	gulp.src(sassMainFile)
		// PostCSS 
		.pipe(
			postcss(postcssProcessors, {syntax: scss})
		)
		// SASS to CSS
		.pipe(
			sass({ outputStyle: 'compressed' })
			.on('error', gutil.log)
		)
		.pipe(gulp.dest('dist/assets/css'));
});



/* *************
	JS
************* */
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var jsFiles = 'src/scripts/**/*.js';

var jsControllerFiles = ['src/scripts/main/IndexController.js', 'src/scripts/main/RestaurantController.js'];
var jsMainFiles = ['src/scripts/main/main.js', 'src/scripts/main/handlebars-helpers.js', 'src/scripts/main/templates.js'];


gulp.task('js', ['templates'], function() {
	gulp.src(jsMainFiles)
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/assets/js'));
	gulp.src(jsControllerFiles)
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/js'));
});




/* *************
  TEMPLATING
************* */

var fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
	gulp.src(['src/views/index.html', 'src/views/restaurant.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist/'));
});


var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('templates', function () {
    return gulp.src('src/views/templates/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
          namespace: 'MyApp.templates',
          noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('src/scripts/main/'));
});




/* *************
	SERVER with BrowserSync
************* */

var browserSync = require('browser-sync');
gulp.task('connectWithBrowserSync', function() {
	browserSync.create();
	browserSync.init({
		server: './dist',
		port: 3100
	});
});



	

/* *************
	WATCH
************* */

gulp.task('watch', function() {
	gulp.watch(sassFiles,['css']).on('change', browserSync.reload); 
	gulp.watch(jsFiles,['js']).on('change', browserSync.reload);
	gulp.watch(['src/views/*.html', 'src/views/templates/*.hbs'], ['fileinclude', 'templates']).on('change', browserSync.reload);
});



/* *************
	DEFAULT
************* */

gulp.task('default', ['connectWithBrowserSync', 'css', 'js', 'fileinclude', 'templates', 'watch']);
