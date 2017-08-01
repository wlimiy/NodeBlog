let express=require('express');
let path=require('path');
let app=express();
//设置模板引擎
app.set('view engine','html');
//设置模板文件目录
app.set('views',path.join(__dirname,'views'));
//指定对于html类型的模板使用ejs方法进行渲染
app.engine('.html',require('ejs').__express);
let index=require('./routes/index');
let user=require('./routes/user');
let article=require('./routes/article');
//设置静态文件中间件,静态文件中间件会拦截客户端对于静态文件的请求，如boostrap.css,然后会在当前目录的node_modules下寻找此文件，如果能找到，则返回客户端并结束请求
app.use(express.static(path.resolve('node_modules')));
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
app.listen(8080,()=>{
    console.log(8080)
});