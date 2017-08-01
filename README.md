## Node博客开发
### 初始化项目和安装依赖
>npm init -y：全部使用默认初始化

这个命令会创建一个package.json文件
>sudo npm install body-parser cookie-parser debug ejs express morgan serve-favicon express-session connect-mongo mongoose connect-flash multer async -S

>发布依赖 --save（别名"-S"）：上线开发全需要，例如：mime

>开发依赖 --save-dev（别名"-D"）：只是开发时使用，例如：less babel webpack gulp

### 创建并初始化git
.gitignore

    node_modules
    .idea
    DS_Store
git提交代码
```
git init
git add .
git commit -m '初始化项目和安装依赖'
git remote add origin https://github.com/wlimiy/NodeBlog.git
git push origin master
```
### 创建服务
应用技术：express+mongoose

server.js
```
let express=require('express');
let app=express();
app.listen(8080,()=>{
    console.log(8080)
});
```

