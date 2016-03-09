'use strict';

///////////////////////////////
// MODULES                   //
///////////////////////////////
var assemble = require('fabricator-assemble');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var markdown = require('gulp-markdown');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


///////////////////////////////
// CONFIGURATION             //
///////////////////////////////

// Set env with --env=$env flag
// like this: gulp serve --env=dev
// Source: http://ypereirareis.github.io/blog/2015/10/13/gulp-gulpfile-environment-variable/
var env = gutil.env.env || undefined;

var config = {
  src: {
    scripts: {
      main: [
        'src/assets/scripts/*.js'
      ]
    },
    styles: {
      main: 'src/assets/styles/main.scss',
    },
    views: 'src/views/*.html',
    bluemix: {
      compMarkdown: 'bower_components/bluemix-components/components/**/*.md',
      baseMarkdown: 'bower_components/bluemix-components/base-elements/**/*.md',
    },
    raw: {
      components: 'bower_components/bluemix-components/components/**/*.html',
      baseElements: 'bower_components/bluemix-components/base-elements/**/*.html'
    }
  },
  dest: 'dist'
};


///////////////////////////////
// COPY                      //
///////////////////////////////

gulp.task('copy:components-raw', function() {
  var components = config.src.raw.components;

  return gulp.src(components)
    .pipe(rename({
        dirname: '',
        suffix: '-raw'
      }))
    .pipe(gulp.dest('src/materials/raw'));
});

gulp.task('copy:baseElements-raw', function() {
  var baseElements = config.src.raw.baseElements;

  return gulp.src(baseElements)
    .pipe(rename({
        dirname: '',
        suffix: '-raw'
      }))
    .pipe(gulp.dest('src/materials/raw'));
});

gulp.task('copy:fonts', function() {
  var fonts = 'src/assets/fonts/*.{woff,woff2}';

  return gulp.src(fonts)
    .pipe(gulp.dest(config.dest + '/assets/styles'));
});

gulp.task('copy', ['copy:components-raw', 'copy:baseElements-raw', 'copy:fonts']);


///////////////////////////////
// STYLES                    //
///////////////////////////////

gulp.task('styles', function () {
  return gulp.src(config.src.styles.main)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefix({
      browsers: ['> 1%', 'last 2 versions']
    }))
    .pipe(gulpif(env !== 'dev', csso()))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(config.dest + '/assets/styles'))
    .pipe(gulpif(env === 'dev', browserSync.stream()));
});


///////////////////////////////
// SCRIPTS                   //
///////////////////////////////

gulp.task('scripts', function () {
  return gulp.src(config.src.scripts.main)
    .pipe(concat('main.js'))
    .pipe(gulpif(env !== 'dev', uglify()))
    .pipe(gulp.dest(config.dest + '/assets/scripts'));
});

///////////////////////////////
// ASSEMBLE                  //
///////////////////////////////

gulp.task('assemble', function(done) {
  assemble({
    helpers: {
      markdown: require('helper-markdown'),
      decode: function (val) {
        return decodeURIComponent(val);
      },
      raw: function (options) {
        return options.fn();
      }
  }
  });
  done();
});


///////////////////////////////
// CLEAN                     //
///////////////////////////////

gulp.task('clean', function (cb) {
  del(['**'], { ignore: 'demo/**', cwd: config.dest }, cb);
});


///////////////////////////////
// BUILD                     //
///////////////////////////////

gulp.task('build', ['copy', 'styles', 'scripts', 'assemble']);

///////////////////////////////
// SERVE                     //
///////////////////////////////

gulp.task('serve', function () {

  var reload = browserSync.reload;

  browserSync.init({
    server: {
      baseDir: config.dest
    },
    notify: true,
    open: false,
    logPrefix: 'Bluemix Design System'
  });

  gulp.watch('src/materials/**/*.{html,md,json,yml}', ['assemble']).on('change', reload);
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/assets/scripts/**/*.js', ['scripts']).on('change', reload);
  gulp.watch(config.src.images, ['images']).on('change', reload);
});
