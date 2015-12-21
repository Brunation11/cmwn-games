var argv = require('yargs').argv,
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackDevConfig = require('./webpack.config.dev.js'),
    fs = require('fs'),
    path = require('path'),
    games;

function lsd (_path) {
    return fs.readdirSync(_path).filter(function (file) {
        return fs.statSync(path.join(_path, file)).isDirectory();
    });
}

function defineEntries (_config) {
    // modify some webpack config options
    var config, modulesDirectories;

    config = Object.create(_config);

    config.resolve = Object.create(config.resolve);
    config.entry = {};
    config.resolve.modulesDirectories = config.resolve.modulesDirectories.slice(0); // clone array

    games.forEach(function (_path) {
        config.resolve.modulesDirectories.push(__dirname+'/library/'+_path+'/source/js/');
        config.entry[_path] = ['index'];
    });

    return config;
}

games = lsd('./library');

gulp.task('default', ['build-dev']); 

gulp.task('build-dev', ['webpack:build-dev', 'copy-index', 'copy-media', 'copy-components']);

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function(callback) {
    var config = defineEntries(webpackProdConfig);

    config.plugins = config.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        
        callback();
    });
});

gulp.task('copy-index', ['webpack:build-dev'], function () {
    games.forEach(function (_game) {
        gulp
            .src([ path.join('./library', _game, 'index.html'), path.join('./library', _game, 'source/js/config.game.js') ])
            .pipe( gulp.dest('./build/'+_game) );
    });
});

gulp.task('copy-media', ['copy-index'], function () {
    games.forEach(function (_game) {
        gulp
            .src(path.join( './library', _game, 'media/**/*' ))
            .pipe( gulp.dest(path.join( './build', _game, 'media' )) );
    });
});

gulp.task('copy-components', ['copy-media'], function () {
    games.forEach(function (_game) {
        gulp
            .src(path.join( './library', _game, 'source/js/components/**/*' ))
            .pipe( gulp.dest(path.join( './build', _game, 'components' )) );
    });
});

// To specify what game you'd like to copy play components into call gulp play-components --game game-name
// Replace game-name with the name of the game
gulp.task('play-components', function () {
    var gamesArray = (argv.game === undefined) ? games : [argv.game];
    gamesArray.forEach(function (_game) {
        gulp
            .src( './node_modules/js-interactive-library/components/**/*' )
            .pipe( gulp.dest(path.join( './library', _game, 'source/js/components' )) );
    });
});

gulp.task('webpack:build-dev', function(callback) {
    var config = defineEntries(webpackDevConfig);

    webpack(config).run(function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
        callback();
    });
});

// To specify what game you'd like to watch call gulp watch --game game-name
// Replace game-name with the name of the game
gulp.task('watch', function(callback) {
    var game = (argv.game === undefined) ? '**' : argv.game;
    watch([
        'library/' + game + '/source/js/**/*.js',
        'library/' + game + '/source/js/components/**/*.css',
        'library/' + game + '/source/js/components/**/*.html',
        'library/' + game + '/index.html'], function () {
        gulp.start('build-dev');
    });
});