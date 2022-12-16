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
// js_modules to js
exports.jsCustom = tasks.jsCustom;
// vendors.js in to directory=>assets/js
exports.jsVendors = tasks.jsVendors;

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
// css_modules to style.css
exports.cssConcatProd = tasksProd.cssConcatProd;
// js_modules to js
exports.jsCustomProd = tasksProd.jsCustomProd;
// vendors.js to vendors.min.js
exports.jsVendorsProd = tasksProd.jsVendorsProd;

// ВЫЗОВ ГАЛПА

// gulp
exports.default = gulp.series(
	exports.pug2html,
	exports.html,
	exports.scss,
	exports.jsVendors,
	exports.jsCustom
);

// gulp production
exports.prod = gulp.series(
	exports.pug2htmlProd,
	exports.htmlProd,
	exports.scssProd,
	exports.cssConcatProd,
	exports.jsVendorsProd,
	exports.jsCustomProd
);
