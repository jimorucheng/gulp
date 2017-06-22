/**
 * Created by JGT on 2017/6/21.
 */
var gulp=require('gulp');
gulp.task('task-name',function () {
    
})
gulp.task('hello',function () {
    console.log('hello world!');
})
gulp.task('guo',function () {
    console.log('jun tao!');
})
gulp.task('task-name', function () {
    return gulp.src('source-files') // Get source files with gulp.src
        .pipe(aGulpPlugin()) // Sends it through a gulp plugin
        .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})
var gulp = require('gulp');
// Requires the gulp-sass plugin
var less = require('gulp-less');
gulp.task('less', function(){
    return gulp.src('source-files')
        .pipe(less()) // Using gulp-less
        .pipe(gulp.dest('destination'))
});
gulp.task('less', function(){
    return gulp.src('app/less/styles.less')
        .pipe(less()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task('less', function(){
    return gulp.src('app/less/*.less')
        .pipe(less()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});
gulp.task('less', function(){
    return gulp.src('app/less/**/*.less')
        .pipe(less()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function(){
    gulp.watch('app/less/**/*.less', ['less']);
    // Other watchers
})
gulp.task('less', function(){
    return gulp.src('app/less/**/*.less')
        .pipe(less()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
})