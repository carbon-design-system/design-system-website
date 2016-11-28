/*----------------------
  Gulp-Task / Scripts
------------------------*/
const gulp = require('gulp');
const webpack = require('webpack-stream');
const util = require('gulp-util');
const config = require('./config.json');
const StringReplacePlugin = require('string-replace-webpack-plugin');

const compiler = {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new StringReplacePlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /svgxuse\.js$/,
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              // Run `window.onload()` handler if the event has been fired already
              pattern: /window\.addEventListener\(\s*'load'/i,
              replacement(match) {
                return `if (document.readyState === 'complete') {
                    tid = setTimeout(checkUseElems, 0);
                    return;
                  }
                  ${match}`;
              },
            },
          ],
        }),
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
