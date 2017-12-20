# react-scripts

## 基于1.0.17版本，做了二次开发
- add url-loader 增加对svg的打包编译
- add less-loader 统一用less
- add css-modules 开启css-modules
- add prebuild 检查当前版号是否有tag存在
- change 去除build之后文件的hash
- add externals 钩子
- add local api server 增加本地api mock服务

### proxy api
package.json 添加 
```
"proxy": {
  "/api": {
    "target": "http://xxx",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  }
},
```

### externals 
package.json 添加
"externals": {
  "react": "React",
  "react-dom": "ReactDOM",
  "react-router-dom": "ReactRouterDOM"
}

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
