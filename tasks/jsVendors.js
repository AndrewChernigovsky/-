const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const map = require('gulp-sourcemaps');
const rename = require('gulp-rename');

module.exports = function jsVendors() {
	return src(['src/js/vendors.js'])
		.pipe(map.init())
		.pipe(rename('vendors.min.js'))
		.pipe(map.write(''))
		.pipe(dest('assets/js/'));
};
