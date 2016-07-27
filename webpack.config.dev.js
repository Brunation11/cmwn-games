var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/library',
  entry: null,
  devtool: 'source-map',
  resolve: {
    root: [path.resolve(__dirname, 'library'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.es6.js'],
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
      loader: 'babel-loader',
      include: path.join(__dirname, 'library/'),
      exclude: [/node_modules/],
      query: {
          presets: ['es2015', 'react']
      }
    }]
  },
  postcss: function () {
    return [autoprefixer];
  },
  cache: false
};
