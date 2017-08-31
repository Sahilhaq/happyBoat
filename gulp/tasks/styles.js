var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
mixins = require('postcss-mixins'),
autoprefixer = require('autoprefixer'),
hexrgba = require('postcss-hexrgba');


gulp.task('styles', function(callback){
   return gulp.src('./app/assets/styles/style.css')
            .pipe(postcss([cssImport, mixins, autoprefixer, cssvars, hexrgba, nested]))
            .on('error', function(errorInfo){
                console.log(errorInfo.toString());
                this.emit('end');
					callback();
            })
            .pipe(gulp.dest('./app/temp/styles'));
});
