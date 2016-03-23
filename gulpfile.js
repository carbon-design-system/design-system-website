'use strict';

///////////////////////////////
// MODULES                   //
///////////////////////////////
const assemble = require('fabricator-assemble');
const browserSync = require('browser-sync').create();
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const webpack = require('webpack');
const merge = require('merge-stream');
const path = require('path');


///////////////////////////////
// CONFIGURATION             //
///////////////////////////////

// Set env with --env=$env flag
// like this: gulp serve --env=dev
// Source: http://ypereirareis.github.io/blog/2015/10/13/gulp-gulpfile-environment-variable/
const env = gutil.env.env || undefined;

const config = {
  bower: 'bower_components/bluemix-components',
  src: {
    images: 'src/assets/images/*.*',
    fonts: 'src/assets/fonts/*.{woff,woff2}',
    scripts: 'src/assets/scripts/*.js',
    styles: 'src/assets/styles/main.scss',
    views: 'src/views/*.html'
  },
  dest: 'dist'
};

///////////////////////////////
// CLEAN                     //
///////////////////////////////

gulp.task('clean', function () {
  return del(config.dest);
});


///////////////////////////////
// COPY                      //
///////////////////////////////

function copy(glob, dest) {
  return gulp.src(glob)
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest(dest));
}

gulp.task('copy', function() {
  // Copy HTML for base-elements and components into src/materials for use as
  // live code examples and snippets
  const materials = 'src/materials';
  copy(`${config.bower}/base-elements/**/*html`, `${materials}/base-elements`);
  copy(`${config.bower}/components/**/*html`, `${materials}/components`);

  // Copy font files from src to dist
  copy(config.src.fonts, `${config.dest}/assets/styles`);
});


///////////////////////////////
// STYLES                    //
///////////////////////////////

gulp.task('styles', function () {
  return gulp.src(config.src.styles)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefix({
      browsers: ['> 1%', 'last 2 versions']
    }))
    .pipe(gulpif(env !== 'dev', csso()))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(`${config.dest}/assets/styles`))
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
      path: `${config.dest}/assets/scripts`,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
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
      dasherize: function() {
        return this.name.trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
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
// BUILD                     //
///////////////////////////////

gulp.task('build', ['copy', 'styles', 'scripts', 'assemble']);

///////////////////////////////
// SERVE                     //
///////////////////////////////

gulp.task('serve', function () {

  const reload = browserSync.reload;

  browserSync.init({
    proxy: 'localhost:3333',
    notify: true,
    open: false,
    logPrefix: 'Bluemix Design System'
  });

  gulp.watch('src/**/*.{html,md,json,yml}', ['assemble']).on('change', reload);
  gulp.watch('src/**/*.scss', ['styles']).on('change', reload);
  gulp.watch('src/assets/**/*.js', ['scripts']);
});
