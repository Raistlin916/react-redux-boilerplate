var expressMiddleware = require('webpack-dev-middleware');

module.exports = function (compiler, option) {
  var doIt = expressMiddleware(compiler, option);
  return async (ctx, next) => {
    return await doIt(ctx.req, {
      end: content => {
        ctx.body = content;
      },
      setHeader: (...args) => {
        ctx.set(...args);
      }
    }, next);
  } 
};