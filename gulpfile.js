var _ = require('lodash');
var argv = require('yargs').argv;
var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.config.dev.js');
var webpackProdConfig = require('./webpack.config.prod.js');
var fs = require('fs');
var path = require('path');
var games;
var nolivereload;
var env;
var debug;
var local;
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var header = require('gulp-header');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var inject = require('gulp-inject');
var exec = require('child_process').exec;
var buildTask;
var eslint = require('gulp-eslint');
var eslintConfigJs = JSON.parse(fs.readFileSync('./.eslintrc'));
var eslintConfigConfig = JSON.parse(fs.readFileSync('./.eslintrc_config'));
var scsslint = require('gulp-scss-lint');
var stylish = require('gulp-scss-lint-stylish2');

function lsd(_path) {
    return fs.readdirSync(_path).filter(function (file) {
        return fs.statSync(path.join(_path, file)).isDirectory();
    });
}

function defineEntries(config, game) {
    // modify some webpack config options
    var varsPath = './shared/js/' + env + '-variables.js';

    config = Object.create(config);

    config.resolve = Object.create(config.resolve);
    config.entry = {};
    config.resolve.modulesDirectories = config.resolve.modulesDirectories.slice(0); // clone array

    config.resolve.modulesDirectories.push(__dirname + '/library/' + game + '/components/');
    config.entry[game] = [varsPath, './' + game + '/index.js'];

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

// In order for livereload to work, you should run gulp on the host machine
// unless you have native docker installed.
nolivereload = argv.nolr;
env = argv.environment || argv.env || 'prod';
debug = argv.debug;
local = argv.local || argv.l;

// Production build
buildTask = [
    'sass',
    'webpack:build',
    'copy-index',
    'copy-framework',
    'copy-media',
    'copy-components',
    'clean'
];
gulp.task('default', buildTask);
gulp.task('build', buildTask);
gulp.task('b', buildTask);

gulp.task('webpack:build', function (callback) {
    games.forEach(function (game, index) {
        var webpackConfig;
        var name;
        var config;

        webpackConfig = env === 'dev' ? webpackDevConfig : webpackProdConfig;
        name = 'webpack:build' + (env === 'dev' ? '-dev' : '');
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
    var varsPath = './library/shared/css/' + env + '-variables.scss';
    games.forEach(function (game) {
        gulp
        .src([
            './library/' + game + '/**/*.scss',
            './library/' + game + '/**/*.css'
        ])
        .pipe(header(fs.readFileSync(varsPath, 'utf8')))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer({ browsers: ['last 5 versions'] })]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/' + game + '/css'))
        .pipe(livereload());
    });

    gulp
    .src([
        './library/shared/css/**/*.scss',
        './library/shared/css/**/*.css'
    ])
    .pipe(header(fs.readFileSync(varsPath, 'utf8')))
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
                .pipe(inject(gulp.src('./library/shared/livereload.js'), {
                    starttag: '<!-- inject:livereload -->',
                    transform: function (filePath, file) {
                        if (livereload.server) {
                            return '<script>\n' + file.contents.toString('utf8') + '\n</script>';
                        }
                    }
                }))
                .pipe(gulp.dest('./build/' + game));
            } else {
                gulp
                .src('./library/shared/templates/index.html')
                .pipe(inject(gulp.src(path.join('./library', game, 'config.game.js')), {
                    starttag: '<!-- inject:head -->',
                    transform: function (filePath, file) {
                        var s;
                        var config;
                        var title;
                        s = file.contents.toString('utf8');
                        /* eslint-disable no-eval */
                        config = eval('(' + s.substring(s.indexOf('{'), s.indexOf(';')) + ')');
                        /* eslint-enable no-eval */
                        title = config.title || _.startCase(config.id);
                        return `<title>${title}</title>`;
                    }
                }))
                .pipe(inject(gulp.src('./library/shared/js/test-platform-integration.js'), {
                    starttag: '<!-- inject:integration -->',
                    transform: function (filePath, file) {
                        if (!local) {
                            return '<script>\n    ' +
                                file.contents.toString('utf8') + '\n</script>';
                        }
                    }
                }))
                .pipe(inject(gulp.src(path.join('./library', game, 'config.game.js')), {
                    starttag: '<!-- inject:body -->',
                    transform: function (filePath, file) {
                        var s;
                        var config;
                        var min;
                        s = file.contents.toString('utf8');
                        /* eslint-disable no-eval */
                        config = eval('(' + s.substring(s.indexOf('{'), s.indexOf(';')) + ')');
                        /* eslint-enable no-eval */
                        min = debug ? '' : '.min';
                        return (
                            `<div id="${config.id}"></div>\n  ` +
                            '<script type="text/javascript" ' +
                            `src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react${min}.js">` +
                            '</script>\n  ' +
                            '<script type="text/javascript" ' +
                            `src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom${min}.js">` +
                            '</script>\n  ' +
                            '<script type="text/javascript" ' +
                            `src="../framework/skoash.${config.skoash}.js"></script>`
                        );
                    }
                }))
                .pipe(inject(gulp.src('./library/shared/js/livereload.js'), {
                    starttag: '<!-- inject:livereload -->',
                    transform: function (filePath, file) {
                        if (livereload.server) {
                            return '<script>\n    ' + file.contents.toString('utf8') + '  \n</script>';
                        }
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

gulp.task('copy-media', function () {
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

gulp.task('copy-components', function () {
    games.forEach(function (game) {
        // This is only needed for LL games and can be removed once we no longer need to build any LL games.
        gulp
        .src(path.join( './library', game, 'source/js/components/**/*.html' ))
        .pipe( gulp.dest(path.join( './build', game, 'components' )) );
    });
});

// To specify what game you'd like to watch call gulp watch --game game-name
// Replace game-name with the name of the game
function watchTask() {
    var game = (games.length > 1) ? '**' : games[0];
    env = 'dev';
    if (!nolivereload) livereload.listen();

    watch([
        'library/framework/*',
    ], function () {
        gulp.start('copy-framework');
    });

    watch([
        'library/' + game + '/**/*.js',
        'library/shared/**/*.js',
    ], function () {
        gulp.start('webpack:build');
    });

    watch([
        'library/' + game + '/**/*.scss',
        'library/' + game + '/**/*.css',
        'library/shared/**/*.scss',
        'library/shared/**/*.css',
    ], function () {
        gulp.start('sass');
    });

    watch([
        'library/' + game + '/media/**/*',
    ], function () {
        gulp.start('copy-media');
    });

    watch([
        'library/' + game + '/**/*.html',
        'library/shared/**/*',
        '!library/shared/**/*.js',
        '!library/shared/**/*.scss',
        '!library/shared/**/*.css',
    ], function () {
        gulp.start('build');
    });
}
gulp.task('watch', watchTask);
gulp.task('w', watchTask);

function cleanTask() {
    // TODO: write alternative for windows 9/13/16 AIM
    if (process.platform !== 'win32') { // eslint-disable-line no-undef
        exec('delete-invalid-files.sh', function (err, stdout, stderr) {
            gutil.log(stdout);
            gutil.log(stderr);
        });
    }
}
gulp.task('clean', cleanTask);

/*·.·´`·.·•·.·´`·.·•·.·´`·.·•·.·´Lint Tasks`·.·•·.·´`·.·•·.·´`·.·•·.·´`·.·•·.·´`·.·*/
gulp.task('lint', ['lint-js', 'lint-config']);
gulp.task('lint-js', function () {
    return gulp.src(['library/**/*.js', '!library/**/*.test.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint(eslintConfigJs))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        .pipe(eslint.format('stylish', fs.createWriteStream('jslint.log')))
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});
gulp.task('lint-config', function () {
    return gulp.src(['gulpfile.js', 'webpack.config.dev.js', 'webpack.config.prod.js'])
        .pipe(eslint(_.defaultsDeep(eslintConfigConfig, eslintConfigJs)))
        .pipe(eslint.format())
        .pipe(eslint.format('stylish', fs.createWriteStream('configlint.log')))
        .pipe(eslint.failAfterError());
});
gulp.task('lint-scss', function () {
    var reporter = stylish();
    return gulp.src(['library/**/*.scss'])
        .pipe(scsslint({
            customReport: reporter.issues,
            reporterOutput: 'scsslint.json',
            maxBuffer: 300000000,
        }))
        .pipe(reporter.printSummary)
        .pipe(scsslint.failReporter());
});
