# [reactweb-cli](https://zxjly.github.io/reactweb-cli/) 

用于创建react web工程的一个脚手架工具.


### 安装

[Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g reactweb-cli
```

### 使用

``` bash
$ reactweb init <project-name>
```

举例:

``` bash
$ reactweb init my-project
```

此命令将会在当前目录下生成一个react web工程.使用webpack作为打包工具.

#### 目录结构
```
    + build         // webpack相关配置
    + config        // 配置
    - src           // 源码
        - asserts       // 静态资源
            + imgs          // 图片: png, jpg...
            + styles        // 样式: css, less...
        + components   // React组件
    + static        // 高度静态资源
    + test          // 测试相关
    .babelrc        // babel配置
    .eslintignore   // eslint 忽略配置
    .eslintrc.js    // eslint 配置
    .gitignore      // git 忽略配置
    .postcssrc.js   // postcss配置
    index.html      // html模板
    package.json
    README.md
```

### License

[MIT](http://opensource.org/licenses/MIT)
