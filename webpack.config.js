const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React weather',
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
      verbose: true,
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|svg|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.ts', '.tsx'],
        mainFields: ['browser'],
      }),
    ],
  },
}
