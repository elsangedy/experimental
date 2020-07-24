const path = require('path')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

const remotes = {}

module.exports = merge(common({ remotes }), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3001
  },
  output: {
    publicPath: 'http://localhost:3001/'
  }
})
