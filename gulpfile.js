const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const tasksProd = requireDir('./tasksProduction');

// DEFAULT (directory=>assets)

// pug to html
exports.pug2html = tasks.pug2html;
// html to formatter html
exports.html = tasks.html;
// scss to css
exports.scss = tasks.scss;

// =>=>=>=>=>=>=>=>
// ___________________________________________________________
// =>=>=>=>=>=>=>=>
// PRODUCTION (directory=>production)

// pug to html
exports.pug2htmlProd = tasksProd.pug2htmlProd;
// html to formatter html
exports.htmlProd = tasksProd.htmlProd;
// scss to css
exports.scssProd = tasksProd.scssProd;

exports.cssConcatProd = tasksProd.cssConcatProd;

// ВЫЗОВ ГАЛПА

// gulp
exports.default = gulp.series(exports.pug2html, exports.html, exports.scss);

// gulp production
exports.prod = gulp.series(
	exports.pug2htmlProd,
	exports.htmlProd,
	exports.scssProd,
	exports.cssConcatProd
);
