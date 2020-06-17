require('@babel/polyfill');
require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');

module.exports = (env) => {
  const config = {
    devServer: {
      port: 3000,
      historyApiFallback: true,
      proxy: {
        '/graphql': process.env.SERVE_HEY_FRIEND,
      },
    },
    devtool: 'source-map',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
      filename: 'hey-friend-client.bundle.js',
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
    ],
  };

  if (env && env.GRAPHQL_MOCK) {
    config.plugins.push(new Webpack.NormalModuleReplacementPlugin(
      /graphql\/http-link.js/,
      './schema-link.js'
    ));
  }

  return config;
};
