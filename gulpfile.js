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
        'src/assets/scripts/main.js'
      ],
      vendor: [
        'src/assets/scripts/prism.js'
      ]
    },
    styles: {
      main: 'src/assets/styles/main.scss',
      partials: 'src/assets/styles/partials/**/*.scss'
    },
    views: 'src/views/*.html',
    bluemix: {
      compMarkdown: 'bower_components/bluemix-components/components/**/**/*.md',
      baseMarkdown: 'bower_components/bluemix-components/base-elements/**/**/*.md'
    }
  },
  dest: 'dist'
};


///////////////////////////////
// COPY                      //
///////////////////////////////

gulp.task('copy', function() {
  var fonts = 'src/assets/fonts/*.{woff,woff2}';

  return gulp.src(fonts)
    .pipe(gulp.dest(config.dest + '/assets/styles'));
});


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
// MARKDOWN TO HTML          //
///////////////////////////////

gulp.task('markdown:components', function() {
  return gulp.src(config.src.bluemix.compMarkdown)
    .pipe(rename({dirname: ''}))
    .pipe(markdown())
    .pipe(gulp.dest('src/materials/components/'));
});

gulp.task('markdown:base-elements', function() {
  return gulp.src(config.src.bluemix.baseMarkdown)
    .pipe(rename({dirname: ''}))
    .pipe(markdown())
    .pipe(gulp.dest('src/materials/base-elements/'));
});

gulp.task('markdown', ['markdown:components', 'markdown:base-elements']);


///////////////////////////////
// ASSEMBLE                  //
///////////////////////////////

gulp.task('assemble', function(done) {
  assemble({
    helpers: {
      markdown: function (str, opts) {
        if (typeof str === 'object') {
          opts = str;
          str = null;
        }
        str = str || opts.fn(this);
        return require('markdown-it')()
          .use(require('markdown-it-headinganchor'), {
              linkify: true,
              anchorClass: '',
              slugify: function(str) {
                  return require('string')(str).slugify().s;
              }
          })
          .render(str);
      },
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

gulp.task('build', ['copy', 'markdown', 'styles', 'scripts', 'assemble']);

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
