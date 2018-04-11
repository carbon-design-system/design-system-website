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
  entry: {
    main: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs],
    'carbon-components': paths.carbonComponentsIndexJs,
  },
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/[name].js',
    publicPath: publicPath,
    library: ['CDS', '[name]'],
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [paths.appSrc],
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              importLoaders: 1
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, '../node_modules')
              ],
            },
          },
        ],
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
      chunksSortMode: function (lhs, rhs) {
        return lhs.names[0].localeCompare(rhs.names[0]);
      }
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
      { from: 'src/assets/icons', to: 'assets/icons/' },
    ]),
  ],
};
