'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', gulp.series([function () {
  return gulp.src('src/scss/main.scss')
    .pipe(concat('index.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
      grid: true
    }))
    .pipe(minify())
    .pipe(gulp.dest('assets/stylesheets'));
}]));
 
gulp.task('watch', gulp.series(function () {
  gulp.watch('src/scss/*.scss', gulp.parallel(['sass']));
}));

gulp.task('default', gulp.series(["sass"]))