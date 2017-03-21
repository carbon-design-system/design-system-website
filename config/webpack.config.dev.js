/* eslint-disable */

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');
var path = require('path');

var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

var query = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: true
  },
  gifsicle: {
    interlaced: true
  }
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: publicPath
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          paths.appSrc,
          paths.bluemixComponents
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: ['transform-inline-environment-variables', 'minify-dead-code-elimination'],
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css?importLoaders=1!postcss!sass',
      },
      {
        test: /\.md$/,
        loaders: [
          'html-loader',
          'markdown-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?name=images/[name].[ext]',
          'img?progressive=true'
        ],
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.svg$/,
        exclude: `${paths.assets}/bluemix-icons.svg`,
        loader: 'file?name=images/[name].[ext]',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.html$/,
        loader: 'html',
        options: {
          minimize: false
        }
      }
    ]
  },
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: false
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/fonts', to: 'assets/fonts',
      },
    ]),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
