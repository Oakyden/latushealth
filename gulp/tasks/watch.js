var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    
    //example task for html file
    watch('./app/index.html', function(){
        browserSync.reload();
         });
        
    //example css  
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
  
});

gulp.task('cssInject', ['styles'], function(){

  return  gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});