var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
// var useref = require('gulp-useref'); 
// var uglify = require('gulp-uglify');
// var gulpIf = require('gulp-if');
// var cleanCss = require('gulp-clean-css');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');



gulp.task('default', function() {
	console.log('default task!');
})


// 使用Browser Sync自动刷新
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
})
gulp.task('sass', function() {
	return gulp.src('app/scss/**/*scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

// gulp.task('useref', function() {
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulpIf('*.css', cleanCss()))
//     .pipe(gulp.dest('dist'));
// });



gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	//Other watchers
	
	// html
	gulp.watch('app/*.html', browserSync.reload);
	// js
	gulp.watch('app/js/*.js', browserSync.reload);


})










