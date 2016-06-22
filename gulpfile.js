/*----------------------
  Require
------------------------*/

// Plugins
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const merge = require('merge-stream');

// Tasks
const assemble = require('./gulp-tasks/assemble');
const copy = require('./gulp-tasks/copy');
const icons = require('./gulp-tasks/icons');
const scripts = require('./gulp-tasks/scripts');
const nodemon = require('./gulp-tasks/nodemon');
const styles = require('./gulp-tasks/styles');

/*----------------------
  Tasks
------------------------*/

gulp.task('copy', copy);
gulp.task('icons', icons);
gulp.task('scripts', scripts);
gulp.task('styles', () => {
  styles(browserSync);
});

gulp.task('nodemon', nodemon);

gulp.task('build', ['styles', 'scripts', 'icons'], assemble);

gulp.task('serve', ['nodemon'], function () {

  const reload = browserSync.reload;

  browserSync.init({
    proxy: 'localhost:3333',
    notify: true,
    open: false,
    logPrefix: 'Bluemix Design System'
  });

  gulp.watch('src/**/*.{html,md,json,yml}').on('change', reload);
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/assets/**/*.js', ['scripts', reload]);
});
