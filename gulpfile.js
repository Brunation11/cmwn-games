var gulp = require('gulp'),
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

gulp.task('build-dev', ['webpack:build-dev', 'copy-index', 'copy-components']);

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

gulp.task('copy-components', ['copy-index'], function () {
    games.forEach(function (_game) {
        gulp
            .src(path.join( './library', _game, 'source/js/components/**/*' ))
            .pipe( gulp.dest(path.join( './build', _game, 'components' )) );
    });
});

gulp.task('play-components', function () {
    games.forEach(function (_game) {
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

gulp.task('watch', function(callback) {
    watch(['library/**/source/js/**/*.js', 'library/**/index.html'], function () {
        gulp.start('build-dev');
    });
});