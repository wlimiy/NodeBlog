let express=require('express');
let router=express.Router();
//当客户端通过GET请求的方式访问/路径时，会交由对应的函数处理
router.get('/',function (req,res) {
    res.send('首页')
});
//导出路由
module.exports=router;