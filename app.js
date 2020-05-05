var express = require('express')
var app = express()

//导入页面路由
var homeRouter = require('./routes/home')

//使用导入的路由
app.use(homeRouter)

app.listen('3000', function () {
    console.log('服务已启动')
})


