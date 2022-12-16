const { src, dest } = require('gulp');
const formatHtml = require(`gulp-format-html`);
const bs = require('browser-sync');

module.exports = function html() {
	return src('assets/**/*.html')
		.pipe(formatHtml())
		.pipe(dest('assets/'))
		.pipe(bs.stream());
};
