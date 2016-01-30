const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    client: ['babel-polyfill','./app/client/entry.js'],
  },
  output: {
    path: __dirname + '/app/',
    filename: 'public/js/[name].js',
  },
  module: {
    loaders: [
      {
        test: [/\.js$/,/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true,
        },
      }, 
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.scss/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
      new ExtractTextPlugin('styles/[name].css')
  ]
};
