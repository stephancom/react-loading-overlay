var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './src/LoadingOverlay.js',
  output: {
    library: 'LoadingOverlay',
    libraryTarget:'umd'
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': 'ReactDOM'
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
    ],
  }
};

module.exports = config;