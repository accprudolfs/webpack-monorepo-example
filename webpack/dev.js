const path = require('path')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const common = require('./common.js')

process.env.NODE_ENV = 'development'

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/assets/'),
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
})
