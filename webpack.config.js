
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const workboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');
const { isProd, envs, env } = require('./scripts/envs.js');
const ms = new Date().getMilliseconds();
const rand = Math.floor(Math.random() * 9999);

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/'
  },

  mode: isProd() ? envs.production : envs.development ,
  devtool: 'source-map',

  plugins: [
    new FaviconsWebpackPlugin('./src/assets/dbz.png'),

    new CopyWebpackPlugin([{
      from: './src/libs/particles.conf.json',
      to: 'data/particles.txt',
      flatten: true
    }]),

    new HtmlWebpackPlugin({
      title: pkg.name,
      name: pkg.displayName,
      description: pkg.description,
      color: pkg.config.themeColor,
      template: './src/assets/index.html',
      filename: isProd() ? 'index.tmpl.html' : 'index.html'
    }),

    new WebpackPwaManifest({
      name: 'Databiz Group',
      short_name: 'Databiz',
      description: pkg.description,
      background_color: '#ffffff',
      theme_color: pkg.config.themeColor,
      start_url: '.',
      version: `${pkg.version}.${new Date().toISOString()}`,
      icons: [
        {
          src: path.resolve('src/assets/dbz.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ],
      filename: `manifest.${ms}${rand}.txt`
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              context: ''
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}