const { merge } = require('webpack-merge')
const common = require('./common.js')

process.env.NODE_ENV = 'production'

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
})
