const { src, dest } = require('gulp');
const concatCss = require('gulp-concat-css');

module.exports = function cssConcatProd() {
	return src('assets/css/**/*.css')
		.pipe(concatCss('styles.css'))
		.pipe(dest('production/css/'));
};
