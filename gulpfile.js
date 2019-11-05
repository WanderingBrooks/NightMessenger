'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')

const sass_config = { outputStyle: 'compressed' }

gulp.task('sass', function() {
  return gulp
    .src('./nightmode.scss')
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(gulp.dest('./'))
})

gulp.task('sass:watch', function() {
  gulp.watch('./*.scss', ['sass'])
})
