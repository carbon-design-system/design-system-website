'use strict';

const gulp = require('gulp');
const nodemonServer = require('gulp-nodemon');
const browserSync = require('browser-sync');

let started = false;

const nodemon = (cb) => {

  return nodemonServer({
    script: './server.js',
    watch: './server.js'
  })
  .on('start', function() {
    if (!started) {
      started = true;
      cb();
    } else {
      browserSync.reload({ stream: false });
      cb();
    }
  });
}

module.exports = nodemon;
