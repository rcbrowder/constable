var gulp = require('gulp');
var sass = require('gulp-sass');
var preprocess = require('gulp-preprocess');

gulp.task('copycss', function() {
	return gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('copy', function() {
    return gulp.src('app/**/*+(.html|.js|.scss)')
    .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function() {
  gulp.src(['./app/js/*.js'])
    .pipe(preprocess())
    .pipe(gulp.dest('dist/js'))
});
