const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://79.143.31.216',
      pathRewrite: {
        '^/api/': '/',
      },
    }),
  );
};
