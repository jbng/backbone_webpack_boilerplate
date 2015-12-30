'use strict';

var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    app: './js/app.js',

    vendor: ['jquery', 'underscore', 'backbone', 'backbone.marionette']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/foundation/scss")]
  },
  resolve: {
    alias: {
      'underscore': path.join(__dirname, 'node_modules', 'lodash', 'index.js')
    },
    modulesDirectories: ['node_modules']
  }
};
