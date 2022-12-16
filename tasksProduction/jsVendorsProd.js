const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');

module.exports = function jsVendorsProd() {
	return src('src/js/vendors.js')
		.pipe(uglify())
		.pipe(rename('vendors.min.js'))
		.pipe(dest('production/js/'));
};
