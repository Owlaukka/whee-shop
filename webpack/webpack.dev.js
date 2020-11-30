const { merge } = require('webpack-merge');
const path = require('path');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['/index.tsx', 'webpack-plugin-serve/client'],
  plugins: [
    new Serve({
      hmr: true,
      historyFallback: true,
      static: [path.resolve(__dirname, '../dist')],
    }),
  ],
  watch: true,
});
