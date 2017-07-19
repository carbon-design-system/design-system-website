/* eslint-disable */

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const path = require('path');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);
require('babel-polyfill');

const query = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: true,
  },
  gifsicle: {
    interlaced: true,
  },
};

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    'babel-polyfill',
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [paths.appSrc, paths.bluemixComponents],
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        loader:
          'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader',
      },
      {
        test: /\.md$/,
        loaders: ['html-loader', 'markdown-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?name=images/[name].[ext]',
          'img-loader?progressive=true',
        ],
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.mov$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.(pptx|key)$/,
        loader: 'file-loader?name=downloads/[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new CopyWebpackPlugin([
      { from: 'src/assets/downloads', to: 'downloads/' },
      { from: 'src/assets/fonts', to: 'assets/fonts/' },
      { from: 'src/assets/images', to: 'images/' },
      { from: 'src/assets/googleb9799b851dc5160a.html', to: '/' },
      {
        from: 'node_modules/carbon-components/scripts/carbon-components.min.js',
        to: 'js/',
      },
    ]),
  ],
};
