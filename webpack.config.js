require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = (env) => {
  const config = {
    devServer: {
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },

    entry: './src/index.js',
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      autoprefixer,
    ],
  };

  if (env && env.GRAPHQL_MOCK) {
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /graphql\/links\/http-link.js/,
      '../mock-data/schema-link.js'
    ));
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /..\/node_modules\/axios\/index.js/,
      '../../src/__mocks__/axios-mock.js'
    ));
    config.module.rules.push({
      include: /..\/node_modules\/axios\/index.js/,
      use: { loader: 'babel-loader' },
    });
  }

  return config;
};
