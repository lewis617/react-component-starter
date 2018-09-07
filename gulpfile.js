const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');

gulp.task('babel', () =>
  gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
);

gulp.task('less', function () {
  return gulp.src('./src/index.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['less', 'babel']);