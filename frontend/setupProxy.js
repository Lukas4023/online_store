const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/user', // API endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // Your Flask API's URL
      changeOrigin: true,
    })
  );
};