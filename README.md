## Node博客开发
### 初始化项目和安装依赖
>npm init -y：全部使用默认初始化

这个命令会创建一个package.json文件
>sudo npm install body-parser cookie-parser debug ejs express morgan serve-favicon express-session connect-mongo mongoose connect-flash multer async bootstrap jquery -S

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
### 跑通路由

使用路由中间件
```
/ ：首页
/user/login ：用户登录
/user/signup ：用户注册
/user/signin ：登录
/user/signout ：退出
/article/add ：发表文章
```
routes/article.js
```
let express=require('express');
let router=express.Router();
router.get('/add',function(req,res){
    res.send('发表文章')
})
//导出路由
module.exports=router;
```
server.js
```
//把路由引入到服务器
let article=require('./routes/article');
//用路径变为/article时，跳转到article路由
app.use('/article',article);
```
### 引入ejs模板引擎

server.js
```
let path=require('path');
app.set('view engine','html');//1、设置模板引擎html
app.set('views',path.resolve('views'));//2、指定模板的存放目录
app.engine('html',require('ejs').__express);//3、指定对于html类型的模板使用js方法来进行渲染

```

### 设置html页面

建立public文件夹，放css,图片等静态文件

设置views/index.html

```
在index.html中引入bootstrap.css:
    <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.css">
引入jquery.js,bootstrap.js
    <script src="jquery/dist/jquery.js"></script>
    <script src="bootstrap/dist/js/bootstrap.js"></script>
```
server.js要引入静态文件中间件
>app.use(express.static(path.resolve('node_modules')));
