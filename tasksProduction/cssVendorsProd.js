const { src, dest } = require('gulp');
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

module.exports = function cssVendorsProd() {
	return src('src/vendors/vendors.css')
		.pipe(autoprefixer())
		.pipe(concatCss('vendors.min.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(dest('production/vendors/'));
};
