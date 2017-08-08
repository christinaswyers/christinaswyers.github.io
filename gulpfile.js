var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: ['./**/*.scss']
};

gulp.task('concatjs', function() {
  return gulp.src([
    './assets/js/jquery-3.2.1.min.js',
    './assets/js/bootstrap.min.js',
    './assets/js/custom.js',
    './assets/js/nav.js',
    // './assets/js/git.js',
    // './assets/js/agency.min.js',
    './assets/js/contact-form.js',
    './assets/js/bootstrap-validation.js'
 ])
   .pipe(concat('app.js'))
   .pipe(gulp.dest('./assets/js'));
});

// Copy all static images
gulp.task('images', function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 9}))
    .pipe(gulp.dest('./assets/images/dist'));
});


// Runs on 'gulp'
gulp.task('default', ['concatjs', 'images'], function() { });
 
