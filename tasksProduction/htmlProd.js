const { src, dest } = require('gulp');
const formatHtml = require(`gulp-format-html`);
const bs = require('browser-sync');

module.exports = function htmlProd() {
	return src('assets/*.html')
		.pipe(formatHtml())
		.pipe(dest('production'))
		.pipe(bs.stream());
};
