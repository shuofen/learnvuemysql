var express = require('express')
var app = express()

var allowCors = require('./util/allowCors')
//导入页面路由
var homeRouter = require('./routes/home')

//设置跨域请求头,否则在手机使用ip访问时存在跨域问题,在使用路由之前设置
app.all('*', allowCors);


//使用导入的路由
app.use(homeRouter)

app.listen('3000', function () {
    console.log('服务已启动')
})


