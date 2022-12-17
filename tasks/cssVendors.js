/**
 * Build styles for vendor from SASS
 */
'use strict'

const gulp = require('gulp')
const notify = require('gulp-notify')
const sass = require('gulp-sass')(require('sass'))
const cssimport = require('gulp-cssimport')
const rename = require('gulp-rename')
const cssnano = require('gulp-cssnano')
const cssClean = require('gulp-clean-css')

module.exports = function (options) {
  return () => {
    return gulp
      .src(`./${options.src}/vendors/${options.vendorScss}`)
      .pipe(sass())
      .on(
        'error',
        notify.onError({
          title: 'Sass compiling error',
          icon: './sys_icon/error_icon.png',
          wait: true,
        }),
      )
      .pipe(cssimport())
      .pipe(rename(options.vendorScssMin))
      .pipe(cssnano({ safe: true }), cssClean())
      .pipe(gulp.dest(`./${options.dest}/vendors`))
  }
}
