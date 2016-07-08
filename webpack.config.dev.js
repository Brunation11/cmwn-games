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
      include: path.join(__dirname, 'library/'),
      exclude: [/bower_components/, /node_modules/]
    }]
  },
  postcss: function () {
    return [autoprefixer];
  },
  cache: false
};
