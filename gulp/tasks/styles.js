var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
hexrgba = require('postcss-hexrgba');


gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/style.css')
            .pipe(postcss([cssImport, hexrgba, nested, cssvars]))
            .on('error', function(errorInfo){
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('./app/temp/styles'));
});
