// modules
var gulp = require('gulp');
var sass = require('gulp-sass');

// sass
gulp.task('sass', function () {
    return gulp.src('utils.scss')
        .pipe(sass({
            errLogToConsole: false
        }))
        .pipe(gulp.dest('./'));
});

// default task
gulp.task('default', function () {
    gulp.start('sass');
});
