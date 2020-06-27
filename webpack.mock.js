
require('@babel/polyfill');
require('dotenv').config();
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      app: './src/index.jsx',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      proxy: {
        '/graphql': process.env.SERVE_HEY_FRIEND,
      },
    },
    node: {
      fs: 'empty',
    },
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        { // babel
          exclude: [
            /node_modules/,
            /dist/,
            /coverage/,
          ],
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
        },
        { // sass
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'compressed',
                },
              },
            },
          ],
        },
        {
          exclude: [
            /node_modules/,
            /dist/,
            /coverage/,
          ],
          test: /\.graphql$/,
          loader: 'graphql-tag/loader',
        }, // handle file types
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      ],
    },
    resolve: {
      extensions: ['.mjs', '.js', '.jsx'],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      autoprefixer,
      new Webpack.NormalModuleReplacementPlugin(
        /graphql\/http-link.js/,
        './schema-link.js'
      ),
    ],
  };

  return config;
};
