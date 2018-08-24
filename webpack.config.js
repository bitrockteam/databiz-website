
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const workboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const pkg = require('./package.json');
const { isProd, envs, env } = require('./scripts/envs.js');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  mode: isProd ? envs.production : envs.development ,
  devtool: 'source-map',

  plugins: [
    new FaviconsWebpackPlugin('./src/assets/dbz.png'),

    new HtmlWebpackPlugin({
      title: pkg.name,
      name: pkg.displayName,
      description: pkg.description,
      color: pkg.themeColor,
      template: './src/assets/index.html'
    }),

    new WebpackPwaManifest({
      name: pkg.name,
      short_name: pkg.displayName,
      description: pkg.description,
      background_color: '#ffffff',
      theme_color: pkg.themeColor,
      start_url: '',
      icons: [
        {
          src: path.resolve('src/assets/dbz.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),

    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: [
        "**/*.{jpg,js,png,ico,json,html,css}"
      ],
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}