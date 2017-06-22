/**
 * Created by JGT on 2017/6/22.
 */
var gulp = require('gulp');
gulp.task('hello', function() {
    console.log('Hello World!');
});

var gulp=require('gulp');
var less=require('gulp-less');
gulp.task('less',function () {
   return gulp.src('source.files')
   .pipe(less())
    .pipe(gulp.dest('destination'))
});

gulp.task('less', function(){
    return gulp.src('app/less/styles.less')
        .pipe(less()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});

var useref = require('gulp-useref');
gulp.task('useref', function(){
    return gulp.src('app/html/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

var uglify = require('gulp-uglify');
gulp.task('useref', function(){
    return gulp.src('app/html/*.html')
        .pipe(uglify()) // Uglifies Javascript files
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

var useref = require('gulp-useref');
gulp.task('useref', function(){

    return gulp.src('app/html/2.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});