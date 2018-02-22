const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
    }))
});

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function(){
   browserSync.init({
       server: {
           baseDir: 'app'
       },
   }) 
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulp.dest('dist'))
  });