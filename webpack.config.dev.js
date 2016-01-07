var path = require('path'),
    webpack = require('webpack');

delete require.cache[require.resolve("js-interactive-library")];

module.exports = {
    context: __dirname + '/library',
    entry: null,
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules']
    },
    plugins: [],
    output: {
        path: __dirname+'/build',
        filename: '[name]/ai.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'library/')
        }]
    },
    cache: false
};

