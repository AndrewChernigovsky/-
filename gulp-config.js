module.exports = {
  folder: {
    tasks: 'tasks',
    src: 'src',
    build: 'assets',
    prod: 'production',
  },
  file: {
    mainHtml: 'assets/index.html',
    mainJs: 'app.js',
    vendorJs: 'vendors.js',
    vendorJsMin: 'vendors.min.js',
    mainScss: 'styles.scss',
    mainScssMin: 'styles.min.css',
    vendorScss: 'vendors.scss',
    vendorScssMin: 'vendors.min.css',
  },
  fileIncludepug: {
    templates: 'src/pug/templates',
    dest: 'assets',
  },
  fileIncludepugProd: {
    templates: 'src/pug/templates',
    dest: 'production',
  },
  task: {
    buildCustomJs: 'jsCustom',
    buildJsVendors: 'jsVendors',
    buildStylesVendors: 'cssVendors',
    copyFolders: 'copy',
  },
  autoprefixer: {
    browserslist: ['.browserslistrc'],
  },
  imageExtensions: 'jpg|jpeg|png|svg|gif|ico|tiff',
  getPathesForSassCompiling: function () {
    return {
      files: [],
      isGcmq: false,
    }
  },
  getPathesToCopyForProduction: function () {
    return [
      './**/*',
      '!.*',
      '!.*/**',
      '.htaccess',
      `!${this.folder.prod}`,
      `!${this.folder.build}/images/info.txt`,
      `!{${this.folder.src},${this.folder.src}/**}`,
      '!{tasks,tasks/**}',
      '!{node_modules,node_modules/**}',
      '!CONTRIBUTING.md',
      '!gulpfile.js',
      '!gulp-config.js',
      '!LICENSE',
      '!package.json',
      '!package-lock.json',
      '!README.md',
      '!readme.txt',
      '!{sys_icon,sys_icon/**}',
    ]
  },
  getPathesToCopy: function () {
    return [
      `${this.folder.src}/**`,
      'src/images/**/*.{png, jpg, jpeg, svg, ico, gif, webp, pdf, eps, tiff}',
      'src/sprite/*',
      'src/videos/**/*.{avi, mkv, asf, mp4, flv, webm}',
      'src/fonts/**/*.{ttf, otf, eot, woff, woff2}',
      '!src/js/**/*.js',
      '!src/pug/**/*.pug',
      '!src/scss/**/*.scss',
    ]
  },
}
