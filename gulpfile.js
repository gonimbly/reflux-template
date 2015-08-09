require('./gulpfile.local');

var gulp = require('gulp');
var chalk = require('chalk');

gulp.task('default', function() {
  var officialTasks = [
    'gulp local ' + chalk.dim('uses Apis'),
    'gulp prod ',
  ];
  var header = chalk.bold.underline('The Gulp Tasks') + '\n'
  console.log('\n' + header + '\n' + officialTasks.join('\n') + '\n');
});