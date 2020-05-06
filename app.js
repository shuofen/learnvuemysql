var express = require('express')
var app = express()

var allowCors = require('./util/allowCors')
//导入页面路由
var homeRouter = require('./routes/home')

//使用导入的路由
app.use(homeRouter)

//设置跨域请求头
app.all('*', function (req, res ,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.listen('3000', function () {
    console.log('服务已启动')
})


