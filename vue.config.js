const {
  defineConfig
} = require('@vue/cli-service')
const path = require('path')
config = require('./config/module-config.js')
const WebpackBar = require('webpackbar')

const name = 'ccb'
const resolve = (dir) => path.join(__dirname, ".", dir)

let moduleName = (typeof (process.env.PROJECT_NAME) === 'undefined') ? name : process.env.PROJECT_NAME

module.exports = defineConfig(

  {
    ...config[moduleName],
    productionSourceMap: false,
    filenameHashing: true,
    publicPath: "./",
    assetsDir: "assets",
    outputDir: `dist/${moduleName}/`,
    devServer: {
      port: 8080,
      host: "0.0.0.0",
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },

    // TM关闭ESlint
    lintOnSave: false,
    // lintOnSave: process.env.NODE_ENV === 'development',

    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
      }

      // 可为不同子系统模块配置快捷路径
      // 修改后需要重启服务
      return {
        resolve: {
          // 省略引入文件的扩展名
          extensions: ['.js', '.json', '.vue', '.scss', '.css'],
          alias: {
            "@": resolve("src"),
            "@ccbapp": resolve("src/modules/ccbapp"),
            "@ccbassets": resolve("src/modules/ccbapp/assets"),
            "@modapp": resolve("src/modules/modapp"),
            "@modassets": resolve("src/modules/modapp/assets")
          },
          fallback: {
            "path": require.resolve("path-browserify")
          }
        },
      }
    },
    chainWebpack: (config) => {
      // 进度条
      config.plugin('webpackBar').use(WebpackBar)
      // 修复HMR
      config.resolve.symlinks(true)
    }
  })
