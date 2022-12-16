const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.pug2html = tasks.pug2html;
exports.html = tasks.html;
exports.htmlProd = tasks.htmlProd;

exports.default = gulp.series(exports.pug2html, exports.html);

exports.prod = gulp.series(exports.pug2html, exports.htmlProd);
