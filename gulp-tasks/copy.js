/*----------------------
  Gulp-Task / Copy
------------------------*/

const gulp = require('gulp');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const config = require('./config.json');

function copyGlob(glob, dest) {
  return gulp.src(glob)
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest(dest));
}

const copy = () => {
  // Copy icon svg files into dist asset folder
  gulp.src('./node_modules/@console/bluemix-icons/svg/**')
    .pipe(gulp.dest('./dist/assets/icons/'));

  // Copy HTML for base-elements and components into src/materials for use as
  // live code examples and snippets
  const materials = 'src/materials';
  const streams = [];
  streams.push(copyGlob(`${config.npm}/consumables/html/base-elements/**/*.html`, `${materials}/base-elements`));
  streams.push(copyGlob(`${config.npm}/consumables/html/components/**/*.html`, `${materials}/components`));
  streams.push(copyGlob(`${config.npm}/consumables/js/es2015/*.js`, `${materials}/js`));

  // Copy package.json and bower.json files to /data so that fabricator can access the version of Bluemix components being used
  streams.push(copyGlob(`package.json`, `src/data`));
  streams.push(copyGlob(`bower.json`, `src/data`));

  // Copy other data JSON files to /data
  streams.push(copyGlob(`${config.icons}/icons.json`, `src/data`));
  streams.push(copyGlob(`${config.npm}/consumables/scss/global/colors/*.json`, `src/data`));

  // Copy font files from src to dist
  streams.push(copyGlob(config.src.fonts, `${config.dest}/assets/fonts`));

  // Copy sprite.svg into asset folder
  gulp.src('./node_modules/@console/bluemix-icons/sprite.svg')
    .pipe(gulp.dest('./dist/assets/'));

  // Copy images from src to dist
  gulp.src(['./src/materials/**/**'])
     .pipe(gulp.dest('./dist/materials/'));

   // Copy images from src to dist
  gulp.src(['./src/views/temp-materials/**'])
     .pipe(gulp.dest('./dist/materials/'));

  // Copy images from src to dist
  gulp.src(['./src/assets/scripts/vendor/**'])
   .pipe(gulp.dest('./dist/assets/'));

  // Copy images from src to dist
  gulp.src(['./src/assets/images/**'])
    .pipe(gulp.dest('./dist/assets/images/'));

  // Copy resources from src to dist
  gulp.src(['./src/assets/resources/**'])
    .pipe(gulp.dest('./dist/assets/resources/'));

  return merge(streams);
};

module.exports = copy;
