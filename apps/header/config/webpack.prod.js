const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

const remotes = {
  auth: 'auth@https://experimental-auth.vercel.app/remoteEntry.js'
}

module.exports = merge(common({ remotes }), {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: 'https://experimental-header.vercel.app/'
  }
})
