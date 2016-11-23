var path = require('path');

module.exports = {
    context: __dirname + '/library',
    entry: null,
    devtool: 'cheap-module-inline-source-map',
    resolve: {
        root: [path.resolve(__dirname, 'library'), path.resolve(__dirname, 'node_modules')],
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules']
    },
    plugins: [],
    output: {
        path: __dirname + '/build',
        filename: '[name]/ai.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel'],
            exclude: [/bower_components/, /node_modules/],
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    cache: false
};
