var mysql = require('mysql')

//导出配置
module.exports = function (sql, callBack) {
    //配置数据库
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'vuedata'
    })

    // 连接数据库
    connection.connect();

    connection.query(sql, function (error, data) {
        if(error){
            console.log('接口出错')
            return
        }
        callBack(error, data)
    })

    //断开数据库连接
    connection.end()
}