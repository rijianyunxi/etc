
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  devServer: {
    /* 本地ip地址 */
    host: "0.0.0.0", //局域网和本地访问
    port: "8080",
    hot: true,
    /* 自动打开浏览器 */
    open: true,
    overlay: {
      warning: false,
      error: true
    }
    /* 跨域代理 */
    // proxy: {
    //   "/api": {
    //     /* 目标代理服务器地址 */
    //     target: "http://127.0.0.1:3000", //
    //     /* 允许跨域 */
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //     //   "^/api": ""
    //     }
    //   }
    // }
  }
}