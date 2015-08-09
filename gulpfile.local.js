var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webserver = require('gulp-webserver');
var preprocess = require('gulp-preprocess');
var webpackConfig = require('./webpack.config.js');
var debug = require('gulp-debug');
var karma = require('gulp-karma');
var gulpif = require('gulp-if');
var _create = require('lodash.create');
var argv = require('yargs').argv;

var files = {
  watch: [
    'app/routes.js',
    'app/main.js',
    'app/components/**/*.js',
    'app/components/**/*.scss',
    'app/components/**/*.svg',
    'app/actions/*.js',
    'app/stores/*.js',
    'app/utils/*.js'
  ],
  index: './index.html',
  main: './app/main.js'
}

// ***
// Build index file
// ***
gulp.task('build-index', function() {
  return gulp.src(files.index)
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch-index', ['build-index'], function() {
  return gulp.watch(files.index, ['build-index']);
});

// ***
// Build local files
// ***

gulp.task('build-local-js', function() {
  var config = _create(webpackConfig, {
    entry: {
      main: files.main
    }
  });
  return gulp.src(files.main)
    .pipe(webpack(config))
    .pipe(gulpif(argv.testdata,
                 preprocess({context: {ENV: 'test'}}),
                 preprocess({context: {ENV: 'local'}}))
    )
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch-local', ['build-local-js'], function() {
  return gulp.watch(files.watch, ['build-local-js']);
});


// ***
// Main tasks
// ***
gulp.task('local', ['watch-index', 'watch-local'], function() {
  return gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      open: 'http://localhost:8000/#/projects'
    }));
});