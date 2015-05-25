var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

var options = {
    outputPath: 'dist'
};

// Gulp JavaScript Task
gulp.task('scripts', function() {
    browserify({
    	entries: './src/App.js',
    	debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(options.outputPath));
});

// Gulp Default Task
gulp.task('default', ['scripts']);