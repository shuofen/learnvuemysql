var mysql = require('mysql')

//导出配置
module.exports = function (sql, insetData, callBack) {
    //配置数据库
    var connection = mysql.createConnection({
        hose: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'vuedata'
    })

    // 连接数据库
    connection.connect();

    connection.query(sql, insetData, function (error, data) {
        if(error){
            console.log(error)
            return
        }
        callBack(error, data)
    })

    //断开数据库连接
    connection.end()
}