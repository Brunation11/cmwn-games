var _ = require('lodash'),
  argv = require('yargs').argv,
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
  development,
  debug,
  local,
  sourcemaps = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  livereload = require('gulp-livereload'),
  inject = require('gulp-inject'),
  exec = require('child_process').exec,
  buildTask;

function lsd(_path) {
  return fs.readdirSync(_path).filter(function (file) {
    return fs.statSync(path.join(_path, file)).isDirectory();
  });
}

function defineEntries(config, game) {
  // modify some webpack config options
  config = Object.create(config);

  config.resolve = Object.create(config.resolve);
  config.entry = {};
  config.resolve.modulesDirectories = config.resolve.modulesDirectories.slice(0); // clone array

  config.resolve.modulesDirectories.push(__dirname + '/library/' + game + '/source/js/'); // eslint-disable-line no-undef
  config.entry[game] = ['./' + game + '/index.js'];

  gutil.log(games, 'entry', config.entry);

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
development = argv.development || argv.dev;
debug = argv.debug;
local = argv.local || argv.l;

// the clean task still does not always run last
// this should be updated to make sure clean gets run after all other tasks
// Production build
buildTask = ['sass', 'webpack:build', 'copy-index', 'copy-framework', 'copy-media', 'copy-components', 'copy-thumbs', 'clean'];
gulp.task('default', buildTask);
gulp.task('build', buildTask);
gulp.task('b', buildTask);

gulp.task('webpack:build', function (callback) {
  games.forEach(function (game, index) {
    var webpackConfig, name, config;

    webpackConfig = development ? webpackDevConfig : webpackProdConfig;
    name = 'webpack:build' + (development ? '-dev' : '');
    config = defineEntries(webpackConfig, game);

    // run webpack
    webpack(config, function (err, stats) {
      if (err) throw new gutil.PluginError(name, err);
      gutil.log(`[${name}]`, stats.toString({
        colors: true
      }));
      if (index === games.length - 1) {
        callback();
      }
    });
  });
});

gulp.task('sass', function () {
  games.forEach(function (game) {
    gulp
      .src(['./library/' + game + '/**/*.scss',
          './library/' + game + '/**/*.css'])
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(sourcemaps.init())
      .pipe(postcss([autoprefixer({ browsers: ['last 5 versions'] })]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/' + game + '/css'))
      .pipe(livereload());
  });

  gulp
    .src(['./library/shared/css/**/*.scss',
        './library/shared/css/**/*.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer({ browsers: ['last 5 versions'] })]))
    .pipe(gulp.dest('./build/shared/css'))
    .pipe(livereload());
});

gulp.task('copy-index', function () {
  games.forEach(function (game) {
    var indexPath = path.join('./library', game, 'index.html');
    fs.stat(indexPath, function (err) {
      if (err == null) {
        gulp
          .src(indexPath)
          // include the following code where you want the livereload script to be injected
          /*
            <!-- inject:livereload -->
            <!-- endinject -->
          */
          .pipe(inject(gulp.src('./library/shared/livereload.js'), {
            starttag: '<!-- inject:livereload -->',
            transform: function (filePath, file) {
              if (livereload.server) return '<script>\n' + file.contents.toString('utf8') + '\n</script>';
            }
          }))
          .pipe(gulp.dest('./build/' + game));
      } else {
        gulp
          .src('./library/shared/templates/index.html')
          .pipe(inject(gulp.src(path.join('./library', game, 'config.game.js')), {
            starttag: '<!-- inject:head -->',
            transform: function (filePath, file) {
              var s, config, title;
              s = file.contents.toString('utf8');
              config = eval('(' + s.substring(s.indexOf('{'), s.indexOf(';')) + ')'); // eslint-disable-line no-eval
              title = config.title || _.startCase(config.id);
              return `<title>${title}</title>`;
            }
          }))
          .pipe(inject(gulp.src('./library/shared/js/test-platform-integration.js'), {
            starttag: '<!-- inject:integration -->',
            transform: function (filePath, file) {
              if (!local) return '<script>\n    ' + file.contents.toString('utf8') + '  \n</script>';
            }
          }))
          .pipe(inject(gulp.src(path.join('./library', game, 'config.game.js')), {
            starttag: '<!-- inject:body -->',
            transform: function (filePath, file) {
              var s, config, min;
              s = file.contents.toString('utf8');
              config = eval('(' + s.substring(s.indexOf('{'), s.indexOf(';')) + ')'); // eslint-disable-line no-eval
              min = debug ? '' : '.min';
              return (
                `<div id="${config.id}"></div>\n  ` +
                `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react${min}.js"></script>\n  ` +
                `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom${min}.js"></script>\n  ` +
                `<script type="text/javascript" src="../framework/skoash.${config.skoash}.js"></script>`
              );
            }
          }))
          .pipe(inject(gulp.src('./library/shared/js/livereload.js'), {
            starttag: '<!-- inject:livereload -->',
            transform: function (filePath, file) {
              if (livereload.server) return '<script>\n    ' + file.contents.toString('utf8') + '  \n</script>';
            }
          }))
          .pipe(inject(gulp.src('./library/shared/js/google-analytics.js'), {
            starttag: '<!-- inject:ga -->',
            transform: function (filePath, file) {
              return '<script>\n    ' + file.contents.toString('utf8') + '  \n</script>';
            }
          }))
          .pipe(gulp.dest('./build/' + game));
      }
    });


    // This is only needed for LL games and can be removed once we no longer need to build any LL games.
    gulp
      .src(path.join('./library', game, 'source/screens/*'))
      .pipe(gulp.dest('./build/' + game + '/screens'));
  });
});

gulp.task('copy-framework', function () {
  gulp
    .src(['./library/framework/*'])
    .pipe(gulp.dest('./build/framework'));
});

gulp.task('copy-media', ['copy-index'], function () {
  games.forEach(function (game) {
    // This can be removed once media for every game is transferred to the media server.
    gulp
      .src(path.join( './library', game, 'media/**/*' ))
      .pipe( gulp.dest(path.join( './build', game, 'media' )) );
  });

  // This can be removed once fonts for every game are transferred to the media server.
  gulp
    .src(['./library/shared/fonts/*'])
    .pipe(gulp.dest('./build/shared/fonts'));

  // This can be removed once shared images games are transferred to the media server.
  gulp
    .src(['./library/shared/images/*'])
    .pipe(gulp.dest('./build/shared/images'));
});

gulp.task('copy-components', ['copy-media'], function () {
  games.forEach(function (game) {
    // This is only needed for LL games and can be removed once we no longer need to build any LL games.
    gulp
      .src(path.join( './library', game, 'source/js/components/**/*.html' ))
      .pipe( gulp.dest(path.join( './build', game, 'components' )) );
  });
});

gulp.task('copy-thumbs', ['copy-components'], function () {
  games.forEach(function (game) {
    // This can be removed once thumbs for each game are moved to the media server.
    gulp
      .src(path.join( './library', game, 'thumb.jpg' ))
      .pipe( gulp.dest('./build/' + game) );
  });
});

// To specify what game you'd like to watch call gulp watch --game game-name
// Replace game-name with the name of the game
function watchTask() {
  if (!nolivereload) livereload.listen();
  var game = (games.length > 1) ? '**' : games[0];
  development = true;
  watch([
    '../js-interactive-library/build/play.js',
    'library/framework/*',
    'library/shared/**/*',
    'library/' + game + '/**/*.js',
    'library/' + game + '/**/*.scss',
    'library/' + game + '/**/*.css',
    'library/' + game + '/**/*.html'], function () {
    gulp.start('build');
  });
}
gulp.task('watch', watchTask);
gulp.task('w', watchTask);

function cleanTask() {
  if (process.platform !== 'win32') { // TODO: write alternative for windows 9/13/16 AIM
    exec('delete-invalid-files.sh', function (err, stdout, stderr) {
      console.log(stdout); // eslint-disable-line no-console
      console.log(stderr); // eslint-disable-line no-console
    });
  }
}
gulp.task('clean', cleanTask);
