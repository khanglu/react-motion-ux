'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Temporary fix for css-loader/post-css
// 'Module build failed: ReferenceError: Promise is not defined'
require('babel-polyfill');

var webpack = require('webpack');
var path = require('path');

var port = process.env.PORT || 3001;

var devtool;
var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];
var entry = {
  'demo0-easing': './demos/demo0-easing/index.jsx',
  'demo1-value-change': './demos/demo1-value-change/index.jsx',
  'demo2-transformation': './demos/demo2-transformation/index.jsx'
};

if (process.env.NODE_ENV === 'development') {
  devtool ='eval-source-map';
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  entry = Object.keys(entry).reduce(function (result, key) {
    result[key] = [
      'webpack-dev-server/client?http://0.0.0.0:' + port,
      'webpack/hot/only-dev-server',
      entry[key]
    ];
    return result;
  }, {});
} else {
  devtool ='source-map';
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
}

module.exports = {
  devtool: devtool,
  entry: entry,
  output: {
    filename: '[name]/all.js',
    publicPath: '/demos/',
    path: __dirname + '/demos/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /build|lib|bower_components|node_modules/,
      loaders: 'babel-loader',
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }],
    noParse: [
      path.join(__dirname, 'node_modules', 'babel-core', 'browser.min.js')
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: plugins,
};
