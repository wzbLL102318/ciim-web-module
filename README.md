# ccb-modules

## 运行建议
npm 和 yarn 均可 建议yarn
> 查询当前源

> npm get registry

> 配置源为淘宝源

> npm config set registry http://registry.npm.taobao.org/

> 查询当前源

> yarn config get registry

> 配置源为淘宝源

> yarn config set registry http://registry.npm.taobao.org/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
yarn serve:ccbapp
yarn serve:modapp
```

### Compiles and minifies for production
```
yarn build
yarn build:ccbapp
yarn build:modapp
```

### Lints and fixes files
```
yarn lint
```

### Configuration
vue cli version: @vue/cli 5.0.4
配置参考
https://cli.vuejs.org/config/


## 多系统集成方案
1. 多系统集成下的分模块打包项目框架
2. 多系统之间互不干扰
3. 主系统可集成各子系统各子系统又可单独打包或运行的场景
4. 单独启动和分模块打包

### 项目结构
├── config                     # 子系统模块配置
│   │── module-config.js       # 子系统模块统一配置文件
├── mock                       # 项目mock 模拟数据
├── dist                       # 项目打包目录可按各系统名称区分包
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── modules                # 子系统模块
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件注意用前缀或者目录区分
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store 管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── babel.config.js            # babel-loader 配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
├── README.md                  # 项目说明文件
└── package.json               # package.json
└── LICENSE                    # 开源协议的一个说明


## 开发注意
子项目必须采用按需引入的方式


## 说明
```
process.env.VUE_APP_PROJECT_NAME 为服务启动传入的参数
.env.development
.env.production 
可为不同子系统设置环境变量VUE_APP_BASE_API_xxx xxx 为子模块名称
VUE_APP_BASE_API_xxx = '****'
调用方式为: process.env[`VUE_APP_BASE_API_${process.env.VUE_APP_PROJECT_NAME}`]

```
cross-env