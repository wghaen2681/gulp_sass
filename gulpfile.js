// define variable gulp and sass
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

// define compiling functin
function buildStyles() {
  return gulp.src('./sass/**/*.scss') // define source 
    .pipe(sass().on('error', sass.logError)) // handling error
    .pipe(gulp.dest('./css')); // define destination
};

exports.watch = buildStyles; // export compiling functin