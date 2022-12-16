const { src, dest } = require('gulp');
const concatCss = require('gulp-concat-css');

module.exports = function cssConcatProd() {
	return src('production/css/**/*.css')
		.pipe(concatCss('styles/styles.css'))
		.pipe(dest('production/css/'));
};
