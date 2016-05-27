var path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: __dirname + '/library',
    entry: null,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'BABEL_ENV': JSON.stringify('production'),
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourceMap: true,
            compress: {
                unused: false,
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    output: {
        path: __dirname+'/build',
        filename: '[name]/ai.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'library/'),
            exclude: [/bower_components/, /node_modules/]
        }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    cache: false
};
