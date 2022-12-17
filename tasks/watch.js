const { watch, parallel, series } = require('gulp')
var browserSync = require('browser-sync').create()

module.exports = function watching() {
  browserSync.init({
    server: {
      baseDir: './assets',
      index: '/index.html',
    },
  })

  watch('src/**/*.pug', series('pug2html', 'html'))
  //   watch('src/**/*.php', parallel('php'))
  //   watch('src/**/*.scss', parallel('style'))
  //   watch('src/**/*.js', parallel('dev_js'))
  //   watch('src/**/*.json', parallel('html'))
  //   watch('src/img/**/*.+(svg|ico)', parallel('rastr'))
  //   watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'))
  //   watch('src/svg/css/**/*.svg', series('svg_css', 'style'))
  //   watch('src/svg/**/*.svg', series('svg_sprite', 'rastr'))
  //   watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'))
}
