# react web app webpack 脚手架

> webapck全功能配置, 包含: 热加载, 代码检查, 单元测试以及CSS扩展

## 使用说明

该模板配套reactweb-cli使用, 用以快速生成工程目录

``` bash
$ npm install -g reactweb-cli
$ vue init my-project
$ cd my-project
$ npm install
$ npm run dev
```

默认本地开发server使用8080端口, 若已经使用了该端口, 请在 `/config/index.js`修改. 否则运行 `npm run dev` 将会出错!

## 模板包含哪些内容

- `npm run dev`: 运行开发Server
  - Webpack + `babel-loader` + `react` React组件化开发
  - hot-reload 热加载
  - 编译检查
  - ESLint 语法检查
  - Source maps

- `npm run build`: 打包生成生产文件
  - JavaScript 压缩
  - HTML 压缩
  - CSS 压缩
  - 静态资源自动生成, 并附上hash值和url.
  - 使用 `npm run build --report`生成文件大小的分析报告

- `npm run unit`: 单元测试
  - 支持 ES2015+ 文件测试
  - 支持所有的webpack loaders
  - 简单的模拟交互

