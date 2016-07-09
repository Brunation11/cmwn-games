var argv = require('yargs').argv,
  gulp = require('gulp'),
  watch = require('gulp-watch'),
  gutil = require('gulp-util'),
  webpack = require('webpack'),
  webpackDevConfig = require('./webpack.config.dev.js'),
  webpackProdConfig = require('./webpack.config.prod.js'),
  fs = require('fs'),
  path = require('path'),
  games,
  nolivereload,
  sourcemaps = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  livereload = require('gulp-livereload'),
  inject = require('gulp-inject');

function lsd(_path) {
  return fs.readdirSync(_path).filter(function (file) {
    return fs.statSync(path.join(_path, file)).isDirectory();
  });
}

function defineEntries(_config, _game) {
  // modify some webpack config options
  var config;

  config = Object.create(_config);

  config.resolve = Object.create(config.resolve);
  config.entry = {};
  config.resolve.modulesDirectories = config.resolve.modulesDirectories.slice(0); // clone array

  config.resolve.modulesDirectories.push(__dirname + '/library/' + _game + '/source/js/'); // eslint-disable-line no-undef
  config.entry[_game] = ['./' + _game + '/index.js'];

  console.log(games, 'entry', config.entry); // eslint-disable-line no-console

  return config;
}

games = (function () {
  var game = argv.game || argv.g;
  switch (typeof game) {
  case 'string': return [game];
  case 'object': if (game) return game;
  }
  return lsd('./library');
}());

nolivereload = argv.nolr;

gulp.task('default', ['build-dev']);

gulp.task('build-dev', ['sass', 'webpack:build-dev', 'copy-index', 'copy-framework', 'copy-media', 'copy-components', 'copy-thumbs']);

// Production build
gulp.task('build', ['sass-prod', 'webpack:build', 'copy-index', 'copy-framework', 'copy-media', 'copy-components', 'copy-thumbs']);

gulp.task('b', ['build']);

gulp.task('webpack:build-dev', function (callback) {
  games.forEach(function (_game, _index) {
    var config = defineEntries(webpackDevConfig, _game);

    webpack(config).run(function (err, stats) {
      if (err) throw new gutil.PluginError('webpack:build-dev', err);
      gutil.log('[webpack:build-dev]', stats.toString({
        colors: true
      }));
      if (_index === games.length - 1) {
        callback();
      }
    });
  });
});

gulp.task('webpack:build', function (callback) {
  games.forEach(function (_game, _index) {
    var config = defineEntries(webpackProdConfig, _game);

    // run webpack
    webpack(config, function (err, stats) {
      if (err) throw new gutil.PluginError('webpack:build', err);
      gutil.log('[webpack:build]', stats.toString({
        colors: true
      }));
      if (_index === games.length - 1) {
        callback();
      }
    });
  });
});

gulp.task('sass', function () {
  games.forEach(function (_game) {
    gulp
      .src(['./library/' + _game + '/**/*.scss',
          './library/' + _game + '/**/*.css'])
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(sourcemaps.init())
      .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/' + _game + '/css'))
      .pipe(livereload());
  });

  gulp
    .src(['./library/shared/css/**/*.scss',
        './library/shared/css/**/*.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
    .pipe(gulp.dest('./build/shared/css'))
    .pipe(livereload());
});

gulp.task('sass-prod', function () {
  games.forEach(function (_game) {
    gulp
      .src(['./library/' + _game + '/source/js/components/**/*.scss',
          './library/' + _game + '/source/js/components/**/*.css',
          './library/' + _game + '/source/css/*.scss',
          './library/' + _game + '/source/css/*.css'])
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
      .pipe(gulp.dest('./build/' + _game + '/css'));

  });
});

gulp.task('copy-index', function () {
  games.forEach(function (_game) {
    gulp
      .src(path.join('./library', _game, 'index.html'))
      // include the following code where you want the livereload script to be injected
      /*
        <!-- inject:livereload -->
        <!-- endinject -->
      */
      .pipe(inject(gulp.src('./livereload.js'), {
        starttag: '<!-- inject:livereload -->',
        transform: function (filePath, file) {
          if (livereload.server) return '<script>\n' + file.contents.toString('utf8') + '\n</script>';
        }
      }))
      .pipe(gulp.dest('./build/' + _game));

    gulp
      .src(path.join('./library', _game, 'source/screens/*'))
      .pipe(gulp.dest('./build/' + _game + '/screens'));
  });
});

gulp.task('copy-framework', function () {
  gulp
    .src(['./library/framework/*'])
    .pipe(gulp.dest('./build/framework'));
});

gulp.task('copy-media', ['copy-index'], function () {
  games.forEach(function (_game) {
    gulp
      .src(path.join( './library', _game, 'media/**/*' ))
      .pipe( gulp.dest(path.join( './build', _game, 'media' )) );
  });

  gulp
    .src(['./library/shared/fonts/*'])
    .pipe(gulp.dest('./build/shared/fonts'));

  gulp
    .src(['./library/shared/images/*'])
    .pipe(gulp.dest('./build/shared/images'));
});

gulp.task('copy-components', ['copy-media'], function () {
  games.forEach(function (_game) {
    gulp
      .src(path.join( './library', _game, 'source/js/components/**/*.html' ))
      .pipe( gulp.dest(path.join( './build', _game, 'components' )) );
  });
});

gulp.task('copy-thumbs', ['copy-components'], function () {
  games.forEach(function (_game) {
    gulp
      .src(path.join( './library', _game, 'thumb.jpg' ))
      .pipe( gulp.dest('./build/' + _game) );
  });
});

// To specify what game you'd like to copy play components into call gulp play-components --game game-name
// Replace game-name with the name of the game
gulp.task('play-components', function () {
  games.forEach(function (_game) {
    gulp
      .src( './node_modules/js-interactive-library/components/**/*' )
      .pipe( gulp.dest(path.join( './library', _game, 'source/js/components' )) );
  });
});

// To specify what game you'd like to watch call gulp watch --game game-name
// Replace game-name with the name of the game
gulp.task('watch', function () {
  if (!nolivereload) livereload.listen();
  var game = (games.length > 1) ? '**' : games[0];
  watch([
    '../js-interactive-library/build/play.js',
    'library/framework/*',
    'library/shared/**/*',
    'library/' + game + '/**/*.js',
    'library/' + game + '/**/*.scss',
    'library/' + game + '/**/*.css',
    'library/' + game + '/**/*.html'], function () {
    gulp.start('build-dev');
  });
});

gulp.task('w', ['watch']);
