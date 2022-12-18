// const { src, dest } = require('gulp');
// const uglify = require('gulp-uglify-es').default;
// const map = require('gulp-sourcemaps');
// const rename = require('gulp-rename');



// module.exports = function jsVendors() {
// 	return src(['src/vendors/vendors.js'])
// 		.pipe(map.init())
// 		.pipe(rename('vendors.min.js'))
// 		.pipe(map.write(''))
// 		.pipe(dest('assets/vendors/'));
// };


/**
 * Build js vendor (concatenate vendors array)
 */
'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const filesExist = require('files-exist');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

module.exports = function (options) {

  return (done) => {
    const jsVendors = require(`../${options.src}/vendors/${options.vendorJs}`);
    const noneES5 = jsVendors.es5.length === 0 ? true : false;
	const noneES6 = jsVendors.es6.length === 0 ? true : false;
	  
    if (noneES5 && noneES6) {
      return done();
    } else if (noneES6) {
      return gulp.src(filesExist(jsVendors.es5))
        .pipe(concat(options.vendorJsMin))
        .pipe(gulpif(options.isProduction, uglify()))
        .pipe(gulp.dest(`./${options.dest}/vendors`));
    } else if (noneES5) {
      return gulp.src(filesExist(jsVendors.es6))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat(options.vendorJsMin))
        .pipe(gulpif(options.isProduction, uglify()))
        .pipe(gulp.dest(`./${options.dest}/vendors`));
    } else {
      return gulp.src(filesExist(jsVendors.es6))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(gulp.src(filesExist(jsVendors.es5)))
        .pipe(concat(options.vendorJsMin))
        .pipe(gulpif(options.isProduction, uglify()))
        .pipe(gulp.dest(`./${options.dest}/vendors`));
    }
  };
};