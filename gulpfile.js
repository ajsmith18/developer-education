'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

gulp.task('default', ['watch']);

gulp.task('build-css', function () {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
	    .pipe(concat('style.css'))
	    .pipe(gulp.dest('assets/css'))
});
 
gulp.task('watch', function () {
  gulp.watch('assets/scss/**/*.scss', ['build-css']);
});

