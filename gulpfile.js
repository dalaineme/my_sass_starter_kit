const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

// Gulp watch syntax
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
});