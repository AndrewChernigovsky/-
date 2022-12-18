var gulp = require('gulp')
var browserSync = require('browser-sync').create()

// Static server
module.exports = function browsersync() {
  browserSync.init({
    server: 'assets',
  })

  gulp.watch('src/**/*.pug').on('change', browserSync.reload)
  gulp.watch('src/**/*.php').on('change',  function(file) {
    livereload(server).changed(file.path)})
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
  gulp.watch('src/scss/**/*.scss').on('change', browserSync.reload)
}
