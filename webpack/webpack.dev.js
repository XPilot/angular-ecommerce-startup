const webpack = require('webpack');
// autoprefixer for cross browser prefixing of the final css
const autoprefixer = require('autoprefixer');

// include our helper functions to ease our life
const helpers = require('./helpers');

// define plugins here
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

// define our environment var and hot module reloading (if flag is present)
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const metadata = require('./metadata')(ENV, HMR);

// here is all the webpack config is defined
// a pain in the ass, really...

module.exports = {
  metadata: metadata,
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  // define entry points
  entry: {
    'main': './src/bootstrap.ts'
  },

  // path and extension resolvers
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src'),
  },

  // the output location, spitted out by our dear webpack
  output: {
    path: helpers.root('build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },

  // the modules exports, or what webpack is all about
  // all loaders, preloaders, postloaders and plugins go here
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/rxjs'),
        ]
      }
    ],

    loaders: [
      // le typescript loader
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },

      // le json loader
      {
        test: /\.json$/,
        loader: 'json-loader',
      },

      // le sass loader
      {
        test: /\.?scss$/,
        loaders: [
          "style",
          "css",
          "postcss",
          "sass"
        ]
      },

      // le html loader - used for our templates
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [
          helpers.root('src/index.html')
        ]
      },
    ]
  },

  // the plugins for this awesome system
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: ['main'], minChunks: Infinity}),
    new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
    new HtmlWebpackPlugin({template: 'src/index.html', chunksSortMode: 'none'}),
    new webpack.DefinePlugin({'ENV': JSON.stringify(metadata), 'HMR': HMR})
  ],

  // config for the post-css plugin
  postcss: [
    autoprefixer({browsers: ['last 2 versions']})
  ],

  // tslint configuration
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  // the webpack dev server configuration
  devServer: {
    host: metadata.host,
    port: metadata.port,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },

  // node configuration
  node: {
    global: 'window',
    process: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
  }
};
