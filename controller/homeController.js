var dbConfig = require('../util/dbconfig')
var dbinsertcon = require('../util/dbinsertcon')

function multiData (req, res) {
    var sql = 'select * from banners';
    var resData = {
        banners: [],
        recommand: []
    }

    // var recommandSql = 'select * from recommand'
    // dbConfig(recommandSql, function (error, data) {
    //     if(error){
    //         console.log("homeController-multiData" + error)
    //     }
    //     resData.recommand = JSON.parse(JSON.stringify(data))
    //   })
      dbConfig(sql, function (error, data) {
        if(error){
            console.log("homeController-multiData" + error)
        }
        resData.banners = JSON.parse(JSON.stringify(data))
        res.send(resData);
      })

   
}

function insertMultiData (req, res) {
    var sql = "INSERT INTO recommand(`acm`,`image`,`link`, `sort`, `title`) VALUES ?"
    var insertData =  [
        {
            "acm": "3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
            "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
            "link": "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
            "sort": 1,
            "title": "\u5341\u70b9\u62a2\u5238"
        },
        {
            "acm": "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
            "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
            "link": "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
            "sort": 2,
            "title": "\u597d\u7269\u7279\u5356"
        },
        {
            "acm": "3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
            "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
            "link": "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
            "sort": 3,
            "title": "\u5185\u8d2d\u798f\u5229"
        },
        {
            "acm": "3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
            "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
            "link": "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
            "sort": 4,
            "title": "\u521d\u79cb\u4e0a\u65b0"
        }
    ]
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
    // insertMultiData: insertMultiData
}