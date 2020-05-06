var url = require('url')
var dbConfig = require('../util/dbconfig')
var dbinsertcon = require('../util/dbinsertcon')


function multiData (req, res) {
    var sql = 'select * from banners';
    var resData = {
        banners: [],
        recommand: []
    }
    var recommandSql = 'select * from recommand'
    dbConfig(recommandSql, function (error, data) {
        if(error){
            console.log("homeController-multiData" + error)
        }
        resData.recommand = JSON.parse(JSON.stringify(data))
        if(resData.banners.length > 0){
            res.send(resData);
        }
      })
    dbConfig(sql, function (error, data) {
        if(error){
            console.log("homeController-multiData" + error)
        }
        resData.banners = JSON.parse(JSON.stringify(data))
        if(resData.recommand.length > 0){
            res.send(resData);
        }
    })
}

function getProductList (req, res) {
    var urlObj = url.parse(req.url, true);
    var type = urlObj.query.type;
    var page = urlObj.query.page;
    var num1 = 40 * (page - 1);
    var num2 = 40 * page;

    var sql = 'select * from goods LIMIT '+ num1 + ','+ num2;
    dbConfig(sql, function (error, data) {
        if(error){
            console.log("getProductList" + error)
        }
        goodsList = JSON.parse(JSON.stringify(data))
        res.send({goodsList: goodsList});
    })
}



function insertMultiData (req, res) {
   

    //把对象的转成纯数组
    var values = [];
    insertData.forEach(function(n, i){
        var _arr = [];
        for(var m in n){
            _arr.push(n[m]);
        }
        values.push(_arr);
    })
    dbinsertcon(sql, [values], function (error, data) {
      if(error){
          console.log(error)
      }
      console.log(data)
    })
}

module.exports = {
    multiData: multiData,
    getProductList: getProductList,
    // insertMultiData: insertMultiData
}