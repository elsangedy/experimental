const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = ({ remotes }) => {
  return {
    entry: './src/index',
    output: {
      path: path.resolve(__dirname, '../dist')
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /bootstrap\.tsx$/,
          loader: 'bundle-loader',
          options: {
            lazy: true
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript']
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        exposes: {
          './atoms': './src/atoms',
          './Login': './src/Login'
        },
        remotes,
        shared: ['react', 'react-dom', 'recoil']
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  }
}
