'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const favicon = require('koa-favicon');
const Jade = require('koa-jade');
const send = require('koa-send');
const path = require('path');

const app = new Koa();
const router = require('./routes');
const jade = new Jade({
  viewPath: './views'
});
jade.use(app);

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);


app.use(logger())
  .use(favicon())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(require('./lib/koa_webpack_middleware')(compiler, {
  	noInfo: true,
  	publicPath: webpackConfig.output.publicPath
  }))
  .use(async (ctx) => {
  	return send(ctx, ctx.path, { root: path.join(__dirname, '/static') });
	})
  .listen(3000, () => console.log('server listening on port 3000'));
