'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    app: 'app/',
    styles: {
      source: 'sass/',
      destination: 'css/'
    },
    scripts: 'js/'
};

gulp.task('compile:sass', function() {
    return gulp.src(paths.app + paths.styles.source + 'styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.app + paths.styles.destination));
});

gulp.task('watch', function() {
    gulp.watch(paths.app + paths.styles.source + '**/*.scss', ['compile:sass']);
});

gulp.task('default', ['watch']);