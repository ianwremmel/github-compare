/* eslint-env node */

const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: PROD ? 'source-map' : 'inline-source-map',
  entry: './main.js',
  mode: PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      },
      {
        test: /\.css$/,
        use: [
          PROD
            ? MiniCssExtractPlugin.loader
            : {loader: 'vue-style-loader', options: {sourceMap: true}},
          {loader: 'css-loader', options: {importLoaders: 1, sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    PROD &&
      new MiniCssExtractPlugin({
        chunkFilename: '[id].css',
        filename: '[id].css'
      }),
    new VueLoaderPlugin()
  ].filter(Boolean)
};
