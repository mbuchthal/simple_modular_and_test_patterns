
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js'];
var testFiles = ['./test/greet_test.js'];

gulp.task('lint:test', () => {
  return gulp.src('./test/**/greet_test.js')
    .pipe(eslint({
      rules: {
        'quotes': [1, 'single']
      },
      envs: ['mocha', 'es6']
    }))
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(files)
    .pipe(eslint({
      rules: {
        'quotes': [1, 'single'],
        'indent': [1, 2]
      },
      envs: ['es6'],
      useEslintrc: true
    }))
    .pipe(eslint.format());
});

gulp.task('test', () => {
  return gulp.src(testFiles)
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', () => {
  gulp.watch([files, testFiles], ['default']);
})

gulp.task('lint', ['lint:test', 'lint:nontest']);
gulp.task('default', ['lint', 'test']);
