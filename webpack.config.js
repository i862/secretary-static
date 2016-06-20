/**
 * Created by menzhongxin on 16/6/16.
 */
var webpack = require('webpack')
  ,path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'./static/lib'),
    publicPath: "/static/lib/",
    filename: 'build.js'
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.vue$/,loader: 'vue'},
      {test: /\.js$/,exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,loader: 'babel'}
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: { fallback: path.join(__dirname, "node_modules") },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}