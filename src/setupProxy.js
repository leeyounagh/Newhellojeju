const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "http://hellojeju.shop",
      // target: "http://43.201.26.114",
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
