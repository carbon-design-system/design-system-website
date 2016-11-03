const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const imageMin = () => {
  gulp.src('src/assets/images/**/*')
      .pipe(imagemin({ verbose: true }))
      .pipe(gulp.dest('src/assets/images'));
};

module.exports = imageMin;
