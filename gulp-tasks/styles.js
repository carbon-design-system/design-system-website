/*----------------------
  Gulp-Task / Styles
------------------------*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const util = require('gulp-util');
const rename = require('gulp-rename');

const config = require('./config.json');
const isProd = !!util.env.production;

const styles = (bs) => {
  return gulp.src(config.src.styles)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefix({
      browsers: ['> 1%', 'last 2 versions']
    }))
    .pipe(isProd ? csso() : util.noop())
    .pipe(rename('main.css'))
    .pipe(gulp.dest(`${config.dest}/assets/styles`))
    .pipe(bs.stream());
}

module.exports = styles;
