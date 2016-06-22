/*----------------------
  Gulp-Task / Scripts
------------------------*/
const gulp = require('gulp');
const webpack = require('webpack-stream');
const util = require('gulp-util');
const config = require('./config.json');

const compiler = {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

const scripts = () => {
  return gulp.src('./src/assets/scripts/main.js')
    .pipe(webpack(compiler))
    .pipe(gulp.dest(`${config.dest}/assets/scripts`))
}

module.exports = scripts;
