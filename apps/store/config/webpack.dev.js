const path = require('path')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

const remotes = {
  auth: 'auth@http://localhost:3001/remoteEntry.js',
  header: 'header@http://localhost:3002/remoteEntry.js'
}

module.exports = merge(common({ remotes }), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000
  },
  output: {
    publicPath: 'http://localhost:3000/'
  }
})
