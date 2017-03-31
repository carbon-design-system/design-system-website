var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var url = require('url');
var paths = require('./paths');
var getClientEnvironment = require('./env');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let extractSASS = new ExtractTextPlugin('/assets/css/styles.css');
require('babel-polyfill');

function ensureSlash(path, needsSlash) {
  var hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return path + '/';
  } else {
    return path;
  }
}

var homepagePath = require(paths.appPackageJson).homepage;
var homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
var publicPath = ensureSlash(homepagePathname, true);
var publicUrl = ensureSlash(homepagePathname, false);
var env = getClientEnvironment(publicUrl);

if (env['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  bail: true,
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js',
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
        loader: ExtractTextPlugin.extract(
          "style",
          "css?sourceMap!postcss!sass?sourceMap"
        ),
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
        test: /\.(pptx|key)$/,
        loader: 'file-loader?name=downloads/[name].[ext]',
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
        loader: 'html?minimize=false'
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
      PUBLIC_URL: publicUrl
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: false
    }),
    new webpack.DefinePlugin(env),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('static/css/styles.css'),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/downloads', to: 'downloads/' },
      { from: 'src/assets/fonts', to: 'assets/fonts/' },
      { from: 'src/assets/images', to: 'images/' },
      { from: 'src/assets/googleb9799b851dc5160a.html', to: '' },
      { from: 'node_modules/carbon-icons/bluemix-icons.svg', to: 'carbon-icons/' },
      { from: 'node_modules/carbon-components/scripts/carbon-components.min.js', to: 'js/' }
    ]),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
