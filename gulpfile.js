var gulp = require('gulp');
var sass = require('gulp-sass');

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
    return gulp.src('app/**/*')
    .pipe(gulp.dest('dist/'))
});
