var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('server', function() {
  connect.server();
});

// convert .scss file convert is to css and send it to the css folder(dest)
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe( sass() )
    .pipe( gulp.dest('css') );
});

// watch any changes file that end .scss from the sass folder
gulp.task('watch', function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
});

// default to when we type "gulp" on the command line.
gulp.task('default', ['server', 'watch']);
