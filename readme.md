# 时间选择插件

>使用react实现一个timepicker,主要使用express+browerify+react,在express生成的简单项目上做的修改


## 项目目录介绍
```
express-react
    -bin 启动文件
    -public  公共资源
        -image
        -javascripts
            -bundle.js 打包的js文件
            -package.js 依赖的包
            -site.js 入口文件
        -stylesheets
    -routes
        -middleware 中间件
            -browerify.js 转换react并打包js文件
        -index.js express自带路由
        -users.js express自带路由
    -src 资源文件
        -components 组件
           -constants.js 常量
           -TimeDetail.js 时 分组件
           -TimeInput.js 组件入口
           -TimeSelect.js 时间选择
        -styles
            -layout.scss 样式文件
        -packages.js 依赖的包
    -views 视图文件
    -.babelrc babel配置文件
    -app.js express配置文件
    -build.js 构建脚本
    -package.json
    -readme.md
```
## 目的

理解基本的react的使用