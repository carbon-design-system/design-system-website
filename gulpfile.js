'use strict';

///////////////////////////////
// MODULES                   //
///////////////////////////////
var assemble = require('fabricator-assemble');
var browserSync = require('browser-sync').create();
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var webpack = require('webpack');
var merge = require('merge-stream');


///////////////////////////////
// CONFIGURATION             //
///////////////////////////////

// Set env with --env=$env flag
// like this: gulp serve --env=dev
// Source: http://ypereirareis.github.io/blog/2015/10/13/gulp-gulpfile-environment-variable/
var env = gutil.env.env || undefined;

var config = {
  src: {
    scripts: 'src/assets/scripts/*.js',
    styles: {
      main: 'src/assets/styles/main.scss',
    },
    views: 'src/views/*.html'
  },
  dest: 'dist'
};


///////////////////////////////
// COPY                      //
///////////////////////////////
const path = 'bower_components/bluemix-components';

gulp.task('copy:materials', function() {
  var baseElements = gulp.src(`${path}/base-elements/**/*html`)
    .pipe(rename({ dirname: ''}))
    .pipe(gulp.dest('src/materials/base-elements'));

  var components = gulp.src(`${path}/components/**/*html`)
    .pipe(rename({ dirname: ''}))
    .pipe(gulp.dest('src/materials/components'));

  return merge(baseElements, components);
});

gulp.task('copy:js', function() {
  return gulp.src([`${path}/base-elements/**/*.js`, `${path}/components/**/*.js`])
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('src/assets/scripts/modules'));
})

gulp.task('copy:fonts', function() {
  var fonts = 'src/assets/fonts/*.{woff,woff2}';

  return gulp.src(fonts)
    .pipe(gulp.dest(config.dest + '/assets/styles'));
});

gulp.task('copy:images', function() {
  var images = 'src/assets/images/*.*';

  return gulp.src(images)
    .pipe(gulp.dest(config.dest + '/assets/images'));
});

gulp.task('copy', ['copy:materials', 'copy:js', 'copy:fonts', 'copy:images']);


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

gulp.task('scripts', function (cb) {
  webpack({
    devtool: 'source-maps',
    entry: './src/assets/scripts/main.js',
    output: {
      path: config.dest + '/assets/scripts',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /bower_components/],
          loaders: ['babel-loader']
        }
      ]
    }
  }, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      progress: true,
      colors: true
    }));
    cb();
  });
});

///////////////////////////////
// ASSEMBLE                  //
///////////////////////////////

gulp.task('assemble', function() {

  const options = {
    layout: 'default',
    layouts: 'src/views/layouts/*',
    layoutIncludes: 'src/views/layouts/includes/*',
    views: ['src/views/**/*', '!src/views/+(layouts)/**'],
    materials: 'src/materials/**/*',
    docs: 'src/docs/**/*.md',
    keys: {
      materials: 'materials',
      views: 'views',
      docs: 'docs'
    },
    helpers: {
      capitalize: function() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      },
      markdown: require('helper-markdown'),
      decode: function (val) {
        return decodeURIComponent(val);
      },
      raw: function (options) {
        return options.fn();
      }
    }
  };

  return assemble(options);
});


///////////////////////////////
// CLEAN                     //
///////////////////////////////

gulp.task('clean', function (cb) {
  return del([config.dest]);
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
    proxy: 'localhost:8080',
    notify: true,
    open: false,
    logPrefix: 'Bluemix Design System'
  });

  gulp.watch('src/**/*.{html,md,json,yml}', ['assemble']).on('change', reload);
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/assets/scripts/**/*.js', ['scripts']).on('change', reload);
  gulp.watch(config.src.images, ['images']).on('change', reload);
});
