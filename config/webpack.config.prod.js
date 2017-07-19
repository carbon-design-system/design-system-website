const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const url = require('url');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
require('babel-polyfill');

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return path + '/';
  } else {
    return path;
  }
}

const homepagePath = require(paths.appPackageJson).homepage;
const homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
const publicPath = ensureSlash(homepagePathname, true);
const publicUrl = ensureSlash(homepagePathname, false);
const env = getClientEnvironment(publicUrl);

if (env['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  entry: ['babel-polyfill', paths.appIndexJs],
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].chunk.js',
    path: paths.appBuild,
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader',
        }),
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
        loader: 'html-loader?minimize=false',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      children: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ENV': JSON.stringify('external'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('static/css/styles.css'),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/downloads', to: 'downloads/' },
      { from: 'src/assets/fonts', to: 'assets/fonts/' },
      { from: 'src/assets/images', to: 'images/' },
      { from: 'src/assets/googleb9799b851dc5160a.html', to: '' },
      {
        from: 'node_modules/carbon-components/scripts/carbon-components.min.js',
        to: 'js/',
      },
    ]),
  ],
};
