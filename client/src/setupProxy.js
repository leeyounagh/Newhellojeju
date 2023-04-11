const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://be.hellojeju.shop/",
      changeOrigin: true,
    })
  );
};
