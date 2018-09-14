const path = require('path');

const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const { isProd, envs, env } = require('./scripts/envs.js');

module.exports = {
  mode: isProd() ? envs.production : envs.development,
  port: 8080,
  content: path.join(__dirname, 'dist'),
  add: (app, middleware, options) => {
    const historyOptions = {
      // ... see: https://github.com/bripkens/connect-history-api-fallback#options
    };

    app.use(convert(history(historyOptions)));
  },
}