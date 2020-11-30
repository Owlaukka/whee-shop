const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  context: path.resolve('./src'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  entry: '/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Whee shop',
    }),
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     parallel: true,
    //     cache: true,
    //   }),
    // ],
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 1000 * 600,
    },
    runtimeChunk: { name: 'manifest' },
  },
};
