> 基于官方[create-react-app](https://github.com/facebook/create-react-app)做了二次开发

* add 默认为css预编译为less（css|less文件）
* add 开启css modules
* add prebuild 检查当前版号是否有tag存在
* add externals 配置  
`package.json`
``` json
"externals": {
  "react": "React",
  "react-dom": "ReactDOM",
  "react-router-dom": "ReactRouterDOM"
}
```
* add 本地mock  
`api/index.js`
* add env 配置
`.env文件`  
.env.developmennt //开发环境  
.env.production //线上环境
```
REACT_APP_自定义变量

```
* add 开关 文件是否带hash串  
`.env文件`
``` 
REACT_APP_HASHVERSION=true
```
* add api 代理  
`package.json`
``` json
"proxy": {
  "/api": {
    "target": "http://xxx",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  }
}
```

> 用法指南   
> 因为`less-loader` 和`css-loader`中的`css modules` 对相对路径的引用解析有冲突  
[参考issues](https://github.com/webpack-contrib/less-loader/issues/109#issuecomment-253797335)
``` less
// css 文件
// error
class {
  background: url(./svg.logo);
}
// good 
class {
  background: url(\./svg.logo);
}
```


### 官方文档 
This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
