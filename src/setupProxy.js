import {createProxyMiddleware} from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'http://localhost:5000/v1',
      secure: false,
      changeOrigin: true,
    })
  );
};
