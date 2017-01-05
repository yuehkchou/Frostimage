const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client');

const config = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Here we have configured it to process both .js and .jsx files using the regular expression.
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      {
        // CSS
        test: /\.css?$/,
        include: path.join(__dirname, 'client'),
        loaders:['css']
      },
      {
        // Images
        test: /\.(jpg|png)$/,
        loader: 'url-loader?name=assets/[name].[ext]'
      },
      {
        // Videos
        test: /\.mp4$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};

module.exports = config;
