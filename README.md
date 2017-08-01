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