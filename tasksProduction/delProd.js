const {src,dest} = require('gulp');
var delite = require('del');

module.exports = function delProd() {
	return delite('production/**/*', {force: true})
}