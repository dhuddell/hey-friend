require('@babel/polyfill');
const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = dotenv.config().parsed;

module.exports = () => {
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  const config = {
    devServer: {
      port: 3000,
      historyApiFallback: true,
      proxy: {
        '/': process.env.SERVE_HEY_FRIEND,
      },
    },
    // maybe works?
    devtool: 'inline-source-map',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    node: {
      fs: 'empty',
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
      new webpack.DefinePlugin(envKeys),
    ],
  };

  return config;
};
