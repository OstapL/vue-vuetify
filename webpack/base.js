const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');
const HtmlWebpackMultiBuildPlugin = require('./HtmlWebpackMultiBuildPlugin');
const lintPugConfig = require('../.pug-lintrc.js');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';
const isDev = NODE_ENV === 'development';
const isStag = NODE_ENV === 'staging';
const isDevStag = isDev || isStag;
const isAnalyze = process.argv.find(v => v.includes('--analyze'));
// const isHotStyles = process.argv.find(v => v.includes('--hot-styles'));
const rootFolder = `${__dirname}/..`;
const nodeModulesFolder = `${__dirname}/../node_modules`;
const env = {
  isStaging: isDevStag,
  NODE_ENV: `"${NODE_ENV}"`,
};
Object.keys(process.env).forEach((key) => {
  env[key] = JSON.stringify(process.env[key]);
});

const extractHTML = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: false,
  template: `${rootFolder}/index.html`,
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true,
  },
  environment: NODE_ENV,
  isLocalBuild: isDev,
});

const config = {
  /**
   * You can use these too for bigger projects. For now it is 0 conf mode for me!
   */
  entry: {
    app: `${rootFolder}/src/index.js`,
  },
  output: {
    //   this one sets the path to serve
    publicPath: '/',
    filename: isDev ? 'js/[name].js' : 'js/[name].[hash].js',
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all', // Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    },
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDevStag ? 'source-map' : '',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  plugins: [
    extractHTML,
    new VueLoaderPlugin(),
    // Because for Lighthouse better to load css in js
    // new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    // filename: isDev ? 'css/[name].css' : `css/[name].${global.manualHash}.css`,
    // chunkFilename: isDev ? 'css/[name].css' : `css/[name].${global.manualHash}.css`,
    // }),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [poststylus(['autoprefixer'])],
        },
      },
    }),
    new HtmlWebpackMultiBuildPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-pug-lint-loader',
        enforce: 'pre',
        include: [`${rootFolder}/src`],
        options: lintPugConfig,
      }, {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [`${rootFolder}/src`],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) && !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.css$/,
        use: [
          // Because for Lighthouse better to load css in js
          // isHotStyles ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.styl[us]*$/,
        use: [
          // Because for Lighthouse better to load css in js
          // isHotStyles ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(pdf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'docs/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  resolveLoader: {
    modules: [
      nodeModulesFolder,
    ],
  },
  resolve: {
    modules: [
      nodeModulesFolder,
    ],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      Components: `${rootFolder}/src/components`,
      Pages: `${rootFolder}/src/pages`,
      Config: `${rootFolder}/src/config`,
      Store: `${rootFolder}/src/store`,
      '@': `${rootFolder}/src`,
      images: `${rootFolder}/src/assets/img`,
      video: `${rootFolder}/src/assets/video`,
      doc: `${rootFolder}/src/assets/doc`,
    },
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

if (isProd || isStag) {
  config.optimization.minimizer = [
    // Enabled by default in production mode if
    // the `minimizer` option isn't overridden.
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ];
}

if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
