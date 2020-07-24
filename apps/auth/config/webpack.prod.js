const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

const remotes = {}

module.exports = merge(common({ remotes }), {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: 'https://experimental-auth.vercel.app/'
  }
})
