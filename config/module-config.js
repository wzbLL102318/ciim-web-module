/**
 * @author wzb
 * @description 多系统集中配置文件
 *              pages 配置参考 vue cli -> multi page
 *              devServer 参考 webpack 注意版本区别   
 */
const config = {
  ccbapp: {
    pages: {
      index: {
        entry: "src/modules/ccbapp/main.js",
        template: "public/index.html",
        title: 'ccbapp',
        filename: "index.html"
      }
    },
    devServer: {
      port: 8081,
      host: "0.0.0.0",
      open: false,
      // 设置代理
      // proxy: {
      //   "/": {
      //     target: "",
      //     changeOrigin: true,
      //     ws: false
      //   }
      // }
    }
  },
  modapp: {
    pages: {
      index: {
        entry: "src/modules/modapp/main.js",
        template: "public/index.html",
        title: 'modapp',
        filename: "index.html"
      }
    },
    devServer: {
      port: 8082,
      host: '0.0.0.0',
      open: false,
      // 代理
      // proxy: {
      //   "/": {
      //     target: "",
      //     changeOrigin: true,
      //     ws: false
      //   }
      // }
    }
  },
};
module.exports = config
