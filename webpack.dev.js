require('regenerator-runtime/runtime');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js')();

// currently don't have a local env file
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.jsx',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/': process.env.SERVE_HEY_FRIEND,
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    autoprefixer,
  ],
});
