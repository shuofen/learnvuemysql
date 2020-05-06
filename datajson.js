//banners数据和插入sql
var sql = "INSERT INTO banners(`acm`,`height`,`height923`, `image`, `image923`,`link`,`title`,`width`,`width923`) VALUES ?"
var insertData = [
    {
        "acm": "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        "height": 390,
        "height923": 390,
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
        "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
        "link": "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        "title": "\u7115\u65b0\u5973\u88c5\u8282",
        "width": 750,
        "width923": 750
    },
    {
        "acm": "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        "height": 390,
        "height923": 390,
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
        "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
        "link": "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        "title": "\u5165\u79cb\u7a7f\u642d\u6307\u5357",
        "width": 750,
        "width923": 750
    },
    {
        "acm": "3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
        "height": 390,
        "height923": 390,
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
        "image923": "https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
        "link": "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
        "title": "\u79cb\u5b63\u62a4\u80a4\u5927\u4f5c\u6218",
        "width": 750,
        "width923": 750
    },
    {
        "acm": "3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        "height": 390,
        "height923": 390,
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
        "image923": "https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
        "link": "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        "title": "\u6d41\u884c\u62a2\u5148\u4e00\u6b65",
        "width": 750,
        "width923": 750
    }
];

//recommand数据和sql
var sql = "INSERT INTO recommand(`acm`,`image`,`link`, `sort`, `title`) VALUES ?"
var insertData = [
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


//goodlist数据
var sql = "INSERT INTO goods(`acm`,`title`,`type`, `img`, `itemType`,`iid`,`orgPrice`,`price`,`cfav`) VALUES ?"
var goodsData = [
    {
      "tradeItemId": "1msoyqw",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200502_3kja9hfe320f9d4j926i0gc92jf85_800x800.jpg",
      "iid": "1msoyqw",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msoyqw&acm=3.ms.1_1_1msoyqw.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571027915_545199647_1_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545199647_35_0-dit_&cparam=MTU4ODc1NTczNF8xaXNtcnYyXzI3MjU0MDJiMGYwMTYzYTI4Y2MyMTU5MzUyOWJmMjgyXzE3XzBfNTcxMDI3OTE1XzRlOGFfMF8xXzBfMzdfMV8wX3JzLTMxNTE0LnJ0LTEud3QtMA==",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msoyqw&acm=3.ms.1_1_1msoyqw.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571027915_545199647_1_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545199647_35_0-dit_&cparam=MTU4ODc1NTczNF8xaXNtcnYyXzI3MjU0MDJiMGYwMTYzYTI4Y2MyMTU5MzUyOWJmMjgyXzE3XzBfNTcxMDI3OTE1XzRlOGFfMF8xXzBfMzdfMV8wX3JzLTMxNTE0LnJ0LTEud3QtMA==",
      "itemMarks": "-1",
      "acm": "3.ms.1_1_1msoyqw.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571027915_545199647_1_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545199647_35_0-dit_",
      "price_taglist": [
        
      ],
      "title": "韩版复古小雏菊短袖衬衫女设计感小众抽绳方领上衣20年夏季新品",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXNtcnYyXzI3MjU0MDJiMGYwMTYzYTI4Y2MyMTU5MzUyOWJmMjgyXzE3XzBfNTcxMDI3OTE1XzRlOGFfMF8xXzBfMzdfMV8wX3JzLTMxNTE0LnJ0LTEud3QtMA==",
      "orgPrice": 46.2,
      "props": [
        "韩版复古小雏菊短袖衬衫女设计感小众抽绳方领上衣20年夏季新品"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 5,
      "price": 46.2,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msoyqw&acm=3.ms.1_1_1msoyqw.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571027915_545199647_1_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545199647_35_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msbqou",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200419_6hc9ca7lfjk5l2fkb66g58cjlka65_3999x5999.jpg",
      "iid": "1msbqou",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msbqou&acm=3.ms.1_1_1msbqou.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568241451_543703653_2_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_543703653_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXZ3dHFzX2Y1NDYwM2UwOTNiMDI5OGM4Nzc5OGJmYWM4OTRhODk1XzE3XzFfNTY4MjQxNDUxXzRlOGZfMF8yXzBfNzczXzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msbqou&acm=3.ms.1_1_1msbqou.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568241451_543703653_2_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_543703653_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXZ3dHFzX2Y1NDYwM2UwOTNiMDI5OGM4Nzc5OGJmYWM4OTRhODk1XzE3XzFfNTY4MjQxNDUxXzRlOGZfMF8yXzBfNzczXzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_1_1msbqou.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568241451_543703653_2_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_543703653_30_0-dit_",
      "price_taglist": [
        
      ],
      "title": "套装大码女装2020夏装遮肚显瘦套装女胖妹妹洋气微胖两件套",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXZ3dHFzX2Y1NDYwM2UwOTNiMDI5OGM4Nzc5OGJmYWM4OTRhODk1XzE3XzFfNTY4MjQxNDUxXzRlOGZfMF8yXzBfNzczXzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "orgPrice": 184.7,
      "props": [
        "套装大码女装2020夏装遮肚显瘦套装女胖妹妹洋气微胖两件套"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 278,
      "price": 84.7,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msbqou&acm=3.ms.1_1_1msbqou.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568241451_543703653_2_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_543703653_30_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mrq7um",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200503_7k85c87g0k3d6466ej7ca4leei0e1_800x800.jpg",
      "iid": "1mrq7um",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mrq7um&acm=3.ms.1_4_1mrq7um.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mrq7um&acm=3.ms.1_4_1mrq7um.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1mrq7um.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "2020夏季新款亲子装纯棉透气舒适男女上衣",
      "type": 2,
      "orgPrice": 89,
      "props": [
        "2020夏季新款亲子装纯棉透气舒适男女上衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 4,
      "price": 23.9,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mrq7um&acm=3.ms.1_4_1mrq7um.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mrsil2",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200404_691h9db0ck1dli3a99ce7je9ikl6j_640x960.jpg",
      "iid": "1mrsil2",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mrsil2&acm=3.ms.1_4_1mrsil2.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mrsil2&acm=3.ms.1_4_1mrsil2.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1mrsil2.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "【富贵鸟】夏季中老年女装假两件上衣时尚妈妈装洋气长袖衫S23",
      "type": 2,
      "orgPrice": 259,
      "props": [
        "【富贵鸟】夏季中老年女装假两件上衣时尚妈妈装洋气长袖衫S23"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 6,
      "price": 99,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mrsil2&acm=3.ms.1_4_1mrsil2.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1ms2pbc",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/200411_791gg24gk6f8e8ebebb0845k7kjkh_1000x1000.jpg",
      "iid": "1ms2pbc",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2pbc&acm=3.ms.1_4_1ms2pbc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2pbc&acm=3.ms.1_4_1ms2pbc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1ms2pbc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威男短袖T恤新款条纹纯棉男士圆领宽松706217",
      "type": 2,
      "orgPrice": 99,
      "props": [
        "美特斯邦威男短袖T恤新款条纹纯棉男士圆领宽松706217"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 6,
      "price": 99,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1ms2pbc&acm=3.ms.1_4_1ms2pbc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1ms2t3w",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/200411_4a2edige3b58e18eg22gbeil1fh15_800x800.jpg",
      "iid": "1ms2t3w",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2t3w&acm=3.ms.1_4_1ms2t3w.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2t3w&acm=3.ms.1_4_1ms2t3w.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1ms2t3w.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威短外套女春季撞色休闲夹克抽绳上衣734988",
      "type": 2,
      "orgPrice": 269,
      "props": [
        "美特斯邦威短外套女春季撞色休闲夹克抽绳上衣734988"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 64,
      "price": 269,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1ms2t3w&acm=3.ms.1_4_1ms2t3w.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mqmh1y",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200301_5giaj01gg2713ke6de7iff372a1l5_640x850.jpg",
      "iid": "1mqmh1y",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mqmh1y&acm=3.ms.1_4_1mqmh1y.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mqmh1y&acm=3.ms.1_4_1mqmh1y.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1mqmh1y.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "大码超火笑脸印花短袖t恤女夏ins潮2020新款宽松百搭上衣",
      "type": 2,
      "orgPrice": 40,
      "props": [
        "大码超火笑脸印花短袖t恤女夏ins潮2020新款宽松百搭上衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 1021,
      "price": 28,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mqmh1y&acm=3.ms.1_4_1mqmh1y.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1me0n1m",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200114_3ka9hbh58edh5bbifcglaeig4j5c1_750x1000.jpg",
      "iid": "1me0n1m",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1me0n1m&acm=3.ms.1_4_1me0n1m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1me0n1m&acm=3.ms.1_4_1me0n1m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1270",
      "acm": "3.ms.1_4_1me0n1m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "HLA/海澜之家简约短袖T恤爱国系列印花款短T男",
      "type": 2,
      "orgPrice": 78,
      "props": [
        "HLA/海澜之家简约短袖T恤爱国系列印花款短T男"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 4,
      "price": 78,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1me0n1m&acm=3.ms.1_4_1me0n1m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msop5y",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200502_13gbgc4ii1lfej9agji04493c1kff_800x800.jpg",
      "iid": "1msop5y",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msop5y&acm=3.ms.1_1_1msop5y.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_570995374_1524738413_3_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1524738413_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXgyMnBjXzUyNjg1OGI0NGYzOTQ0YTY0NjgwMzVmMjZhZTc1OTY2XzE3XzJfNTcwOTk1Mzc0XzRmODlfMF8zXzBfNjc5XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTA=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msop5y&acm=3.ms.1_1_1msop5y.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_570995374_1524738413_3_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1524738413_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXgyMnBjXzUyNjg1OGI0NGYzOTQ0YTY0NjgwMzVmMjZhZTc1OTY2XzE3XzJfNTcwOTk1Mzc0XzRmODlfMF8zXzBfNjc5XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTA=",
      "itemMarks": "-1",
      "acm": "3.ms.1_1_1msop5y.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_570995374_1524738413_3_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1524738413_30_0-dit_",
      "price_taglist": [
        
      ],
      "title": "95棉网红条纹短袖t恤20夏季新款女装修身上衣学生韩版打底衫",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXgyMnBjXzUyNjg1OGI0NGYzOTQ0YTY0NjgwMzVmMjZhZTc1OTY2XzE3XzJfNTcwOTk1Mzc0XzRmODlfMF8zXzBfNjc5XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTA=",
      "orgPrice": 70,
      "props": [
        "95棉网红条纹短袖t恤20夏季新款女装修身上衣学生韩版打底衫"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 9,
      "price": 49,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msop5y&acm=3.ms.1_1_1msop5y.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_570995374_1524738413_3_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1524738413_30_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msl5ii",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200428_5j0841908227494ha3gh2hj61jf6k_800x800.jpg",
      "iid": "1msl5ii",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msl5ii&acm=3.ms.1_1_1msl5ii.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571957628_1523570986_4_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1523570986_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXgwNW9pXzJlODE1YmYwYjAzYTU0ZTM0Mjk5ZGM1YTVmMWZmZjZkXzE3XzNfNTcxOTU3NjI4XzRmODdfMF80XzBfNzk4XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msl5ii&acm=3.ms.1_1_1msl5ii.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571957628_1523570986_4_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1523570986_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXgwNW9pXzJlODE1YmYwYjAzYTU0ZTM0Mjk5ZGM1YTVmMWZmZjZkXzE3XzNfNTcxOTU3NjI4XzRmODdfMF80XzBfNzk4XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "itemMarks": "-1",
      "acm": "3.ms.1_1_1msl5ii.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571957628_1523570986_4_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1523570986_30_0-dit_",
      "price_taglist": [
        
      ],
      "title": "50两件夏季韩版洋气百搭修身短款上衣v领显瘦镂空短袖针织衫女",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXgwNW9pXzJlODE1YmYwYjAzYTU0ZTM0Mjk5ZGM1YTVmMWZmZjZkXzE3XzNfNTcxOTU3NjI4XzRmODdfMF80XzBfNzk4XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "orgPrice": 99,
      "props": [
        "50两件夏季韩版洋气百搭修身短款上衣v领显瘦镂空短袖针织衫女"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 16,
      "price": 29.8,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msl5ii&acm=3.ms.1_1_1msl5ii.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571957628_1523570986_4_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1523570986_30_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1m1h6ms",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/180516_3cag57ih0385j7lc07kk8ked7ccb4_640x832.jpg",
      "iid": "1m1h6ms",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1m1h6ms&acm=3.ms.1_4_1m1h6ms.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1m1h6ms&acm=3.ms.1_4_1m1h6ms.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 188",
      "acm": "3.ms.1_4_1m1h6ms.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "新款夏季韩范亮丝百搭宽松t恤短袖女学生韩版圆领体恤时尚上衣潮",
      "type": 2,
      "orgPrice": 56,
      "props": [
        "新款夏季韩范亮丝百搭宽松t恤短袖女学生韩版圆领体恤时尚上衣潮"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 6055,
      "price": 39,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1m1h6ms&acm=3.ms.1_4_1m1h6ms.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1ml7tu4",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/190922_56f7gcd22j2jab93eiblc7leaebkb_750x1000.jpg",
      "iid": "1ml7tu4",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1ml7tu4&acm=3.ms.1_4_1ml7tu4.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1ml7tu4&acm=3.ms.1_4_1ml7tu4.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "188",
      "acm": "3.ms.1_4_1ml7tu4.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "@港仔文艺男ins糖果色长袖T恤宽松潮流打底衫潮卫衣",
      "type": 2,
      "orgPrice": 99,
      "props": [
        "@港仔文艺男ins糖果色长袖T恤宽松潮流打底衫潮卫衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 207,
      "price": 29,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1ml7tu4&acm=3.ms.1_4_1ml7tu4.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msg9u8",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/191229_3f6e34e00l575bbj0l5g7a88716c0_640x960.jpg",
      "iid": "1msg9u8",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msg9u8&acm=3.ms.1_4_1msg9u8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msg9u8&acm=3.ms.1_4_1msg9u8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "2002 2001",
      "acm": "3.ms.1_4_1msg9u8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "格子西装外套女宽松休闲西服上衣0317",
      "type": 2,
      "orgPrice": 999,
      "props": [
        "格子西装外套女宽松休闲西服上衣0317"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 7,
      "price": 149,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msg9u8&acm=3.ms.1_4_1msg9u8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1me7f1a",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/190304_32kchi6i9efg65810e17f9j90g2d1_640x960.jpg",
      "iid": "1me7f1a",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1me7f1a&acm=3.ms.1_4_1me7f1a.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1me7f1a&acm=3.ms.1_4_1me7f1a.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 188 1270",
      "acm": "3.ms.1_4_1me7f1a.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "夏季2019韩版宽松bf风百搭简约少女半袖ins同款短袖T恤女上衣学生潮",
      "type": 2,
      "orgPrice": 58.17,
      "props": [
        "夏季2019韩版宽松bf风百搭简约少女半袖ins同款短袖T恤女上衣学生潮"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 5247,
      "price": 24.9,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1me7f1a&acm=3.ms.1_4_1me7f1a.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mra3bw",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200321_0k1h95eg4ee47gc5jka3kkae709if_750x1000.jpg",
      "iid": "1mra3bw",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mra3bw&acm=3.ms.1_4_1mra3bw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mra3bw&acm=3.ms.1_4_1mra3bw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1270",
      "acm": "3.ms.1_4_1mra3bw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "海一家2020夏季新品男士字母印花圆领竹节棉短袖打底白T",
      "type": 2,
      "orgPrice": 89,
      "props": [
        "海一家2020夏季新品男士字母印花圆领竹节棉短袖打底白T"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 15,
      "price": 89,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mra3bw&acm=3.ms.1_4_1mra3bw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msgl4g",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200423_88c2affghkfeea69b7h2jhjf7966b_800x800.jpg",
      "iid": "1msgl4g",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msgl4g&acm=3.ms.1_4_1msgl4g.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msgl4g&acm=3.ms.1_4_1msgl4g.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 2016",
      "acm": "3.ms.1_4_1msgl4g.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "小雏菊速干衣运动套装女春夏新款瑜伽服女宽松休闲两件套",
      "type": 2,
      "orgPrice": 39.9,
      "props": [
        "小雏菊速干衣运动套装女春夏新款瑜伽服女宽松休闲两件套"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 0,
      "price": 39.9,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msgl4g&acm=3.ms.1_4_1msgl4g.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msq848",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200503_7idk801g64k80f2jk25fkhgldkc3f_750x1000.jpg",
      "iid": "1msq848",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msq848&acm=3.ms.1_1_1msq848.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571383690_545356442_6_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545356442_37_0-dit_&cparam=MTU4ODc1NTczNF8xaXVsOWJnXzZjY2EwNGQwYTI5YTlhY2YwMGQxNWQwY2FjNDhlZDljXzE3XzVfNTcxMzgzNjkwXzRlODhfMF82XzBfOTU2XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msq848&acm=3.ms.1_1_1msq848.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571383690_545356442_6_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545356442_37_0-dit_&cparam=MTU4ODc1NTczNF8xaXVsOWJnXzZjY2EwNGQwYTI5YTlhY2YwMGQxNWQwY2FjNDhlZDljXzE3XzVfNTcxMzgzNjkwXzRlODhfMF82XzBfOTU2XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "itemMarks": "-1",
      "acm": "3.ms.1_1_1msq848.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571383690_545356442_6_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545356442_37_0-dit_",
      "price_taglist": [
        
      ],
      "title": "短袖女2020年夏季亮片绣花气球糖果色宽松上衣女韩版百搭t恤",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXVsOWJnXzZjY2EwNGQwYTI5YTlhY2YwMGQxNWQwY2FjNDhlZDljXzE3XzVfNTcxMzgzNjkwXzRlODhfMF82XzBfOTU2XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "orgPrice": 39.9,
      "props": [
        "短袖女2020年夏季亮片绣花气球糖果色宽松上衣女韩版百搭t恤"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 5,
      "price": 39.9,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msq848&acm=3.ms.1_1_1msq848.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571383690_545356442_6_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545356442_37_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msnpck",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200430_2f788768fgi281a5cccb51dlcieb3_815x795.jpg",
      "iid": "1msnpck",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msnpck&acm=3.ms.1_4_1msnpck.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msnpck&acm=3.ms.1_4_1msnpck.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "8080 1270",
      "acm": "3.ms.1_4_1msnpck.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "【M喆100-140码5色】舒适透气短袖T恤打底衫上衣",
      "type": 2,
      "orgPrice": 9.9,
      "props": [
        "【M喆100-140码5色】舒适透气短袖T恤打底衫上衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 4,
      "price": 9.9,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msnpck&acm=3.ms.1_4_1msnpck.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mijzhu",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200114_768lj8dd32jgjbld17cj6d19l2bd0_750x1000.jpg",
      "iid": "1mijzhu",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mijzhu&acm=3.ms.1_4_1mijzhu.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mijzhu&acm=3.ms.1_4_1mijzhu.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1270",
      "acm": "3.ms.1_4_1mijzhu.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "HLA/海澜之家V领凉感短袖T恤热卖外穿居家宽松男汗衫",
      "type": 2,
      "orgPrice": 49,
      "props": [
        "HLA/海澜之家V领凉感短袖T恤热卖外穿居家宽松男汗衫"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 10,
      "price": 49,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mijzhu&acm=3.ms.1_4_1mijzhu.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msiz6m",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200426_023d1bfihbi1h4885h6bj016gig9a_640x960.jpg",
      "iid": "1msiz6m",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msiz6m&acm=3.ms.1_4_1msiz6m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msiz6m&acm=3.ms.1_4_1msiz6m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525",
      "acm": "3.ms.1_4_1msiz6m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "森马夏季新款2020短袖T恤男圆领韩版12039001015",
      "type": 2,
      "orgPrice": 99,
      "props": [
        "森马夏季新款2020短袖T恤男圆领韩版12039001015"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 0,
      "price": 99,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msiz6m&acm=3.ms.1_4_1msiz6m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mqtocw",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200307_375gl8ikh6gibi5f3ki077fc6l9d2_3332x4999.jpg",
      "iid": "1mqtocw",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mqtocw&acm=3.ms.1_4_1mqtocw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mqtocw&acm=3.ms.1_4_1mqtocw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1mqtocw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "超火cec短袖女装新款潮泫雅风体恤网红短款上衣ins修身T恤",
      "type": 2,
      "orgPrice": 33.17,
      "props": [
        "超火cec短袖女装新款潮泫雅风体恤网红短款上衣ins修身T恤"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 771,
      "price": 19.9,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mqtocw&acm=3.ms.1_4_1mqtocw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mfci8m",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/200319_2l590663il3ii197l9l8dai1lfah9_800x800.jpg",
      "iid": "1mfci8m",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mfci8m&acm=3.ms.1_4_1mfci8m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mfci8m&acm=3.ms.1_4_1mfci8m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1mfci8m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威字母印花t恤男短袖潮纯棉透气嘻哈661750",
      "type": 2,
      "orgPrice": 139,
      "props": [
        "美特斯邦威字母印花t恤男短袖潮纯棉透气嘻哈661750"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 5,
      "price": 139,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mfci8m&acm=3.ms.1_4_1mfci8m.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1ms2rdm",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200411_4iid82aaglh55k2al56b40jahe2bh_3999x5999.jpg",
      "iid": "1ms2rdm",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2rdm&acm=3.ms.1_4_1ms2rdm.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2rdm&acm=3.ms.1_4_1ms2rdm.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "4375 997",
      "acm": "3.ms.1_4_1ms2rdm.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "小雏菊短袖t恤女ins潮新款中长款韩版宽松上衣夏季超火衣服",
      "type": 2,
      "orgPrice": 199,
      "props": [
        "小雏菊短袖t恤女ins潮新款中长款韩版宽松上衣夏季超火衣服"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 602,
      "price": 38.9,
      "leftbottom_taglist": [
        {
          "color": "#FFFFFF",
          "bgColor": "#FF4466",
          "fmColor": "#FF4466",
          "content": "热销爆款"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1ms2rdm&acm=3.ms.1_4_1ms2rdm.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msil16",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200425_6lfca4468h5bjji92360lblk88e4g_640x960.jpg",
      "iid": "1msil16",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msil16&acm=3.ms.1_1_1msil16.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_569885722_544469726_7_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544469726_91_0-dit_&cparam=MTU4ODc1NTczNF8xaXRoeXFlXzYwYTBmOTdlNGZiNTNlOTQxOTgxMjI5M2Y5NzM0YzcwXzE3XzZfNTY5ODg1NzIyXzQ0OGVfMF83XzBfMzY4XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTA=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msil16&acm=3.ms.1_1_1msil16.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_569885722_544469726_7_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544469726_91_0-dit_&cparam=MTU4ODc1NTczNF8xaXRoeXFlXzYwYTBmOTdlNGZiNTNlOTQxOTgxMjI5M2Y5NzM0YzcwXzE3XzZfNTY5ODg1NzIyXzQ0OGVfMF83XzBfMzY4XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTA=",
      "itemMarks": "-1",
      "acm": "3.ms.1_1_1msil16.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_569885722_544469726_7_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544469726_91_0-dit_",
      "price_taglist": [
        
      ],
      "title": "2020短袖T恤男士夏季潮上衣青少年男装男春秋衣服修身长t恤",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXRoeXFlXzYwYTBmOTdlNGZiNTNlOTQxOTgxMjI5M2Y5NzM0YzcwXzE3XzZfNTY5ODg1NzIyXzQ0OGVfMF83XzBfMzY4XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTA=",
      "orgPrice": 55.71,
      "props": [
        "2020短袖T恤男士夏季潮上衣青少年男装男春秋衣服修身长t恤"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 0,
      "price": 38.99,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msil16&acm=3.ms.1_1_1msil16.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_569885722_544469726_7_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544469726_91_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msevg8",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200422_8b6bjb5eb6c1bf7aab02c87fa88jb_3999x5999.jpg",
      "iid": "1msevg8",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msevg8&acm=3.ms.1_1_1msevg8.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568969071_544072752_8_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544072752_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXdiY2lzX2ZhOWZmYTY0ZGYzN2UyMDI4MDk5ZjRkMWFjODM1ODFlXzE3XzdfNTY4OTY5MDcxXzRmODZfMF84XzBfNzlfMV8wX3JzLTMxNTE0LnJ0LTEud3QtMQ==",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msevg8&acm=3.ms.1_1_1msevg8.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568969071_544072752_8_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544072752_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXdiY2lzX2ZhOWZmYTY0ZGYzN2UyMDI4MDk5ZjRkMWFjODM1ODFlXzE3XzdfNTY4OTY5MDcxXzRmODZfMF84XzBfNzlfMV8wX3JzLTMxNTE0LnJ0LTEud3QtMQ==",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_1_1msevg8.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568969071_544072752_8_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544072752_30_0-dit_",
      "price_taglist": [
        
      ],
      "title": "夏装新款韩版学院风夏季显瘦很仙减龄两件套装女洋气阔腿裤子",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXdiY2lzX2ZhOWZmYTY0ZGYzN2UyMDI4MDk5ZjRkMWFjODM1ODFlXzE3XzdfNTY4OTY5MDcxXzRmODZfMF84XzBfNzlfMV8wX3JzLTMxNTE0LnJ0LTEud3QtMQ==",
      "orgPrice": 179.18,
      "props": [
        "夏装新款韩版学院风夏季显瘦很仙减龄两件套装女洋气阔腿裤子"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 140,
      "price": 79.18,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msevg8&acm=3.ms.1_1_1msevg8.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_568969071_544072752_8_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_544072752_30_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msblti",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200419_2a11bl3k8f9jl6cj0lcadlefah1h4_790x954.jpg",
      "iid": "1msblti",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msblti&acm=3.ms.1_4_1msblti.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msblti&acm=3.ms.1_4_1msblti.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1msblti.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "《蕾丝小美背》可调节肩带 柔软蕾丝 网红打底上衣内衣",
      "type": 2,
      "orgPrice": 199,
      "props": [
        "《蕾丝小美背》可调节肩带 柔软蕾丝 网红打底上衣内衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 18,
      "price": 199,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msblti&acm=3.ms.1_4_1msblti.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mq564s",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_37ff864g71ifflkhfk7d311ihi1c4_6664x9998.jpg",
      "iid": "1mq564s",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mq564s&acm=3.ms.1_4_1mq564s.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mq564s&acm=3.ms.1_4_1mq564s.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525",
      "acm": "3.ms.1_4_1mq564s.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "2件50新款韩版夏季简约短袖t恤女半袖宽松ins洋气网红上衣",
      "type": 2,
      "orgPrice": 98,
      "props": [
        "2件50新款韩版夏季简约短袖t恤女半袖宽松ins洋气网红上衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 810,
      "price": 29.8,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mq564s&acm=3.ms.1_4_1mq564s.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mqxaoc",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200310_6209hh1ef594ac9929f2719la2hlg_1280x1280.jpg",
      "iid": "1mqxaoc",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mqxaoc&acm=3.ms.1_4_1mqxaoc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mqxaoc&acm=3.ms.1_4_1mqxaoc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1mqxaoc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威米奇剪影logo圆领卫衣721196",
      "type": 2,
      "orgPrice": 199,
      "props": [
        "美特斯邦威米奇剪影logo圆领卫衣721196"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 35,
      "price": 199,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mqxaoc&acm=3.ms.1_4_1mqxaoc.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1ms2nts",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/200411_3482kb3h7lkakk8h4dkba95i1g774_1000x1000.jpg",
      "iid": "1ms2nts",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2nts&acm=3.ms.1_4_1ms2nts.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2nts&acm=3.ms.1_4_1ms2nts.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1ms2nts.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威男宽松新款中国嘻哈体恤女情侣装707314",
      "type": 2,
      "orgPrice": 99,
      "props": [
        "美特斯邦威男宽松新款中国嘻哈体恤女情侣装707314"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 11,
      "price": 99,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1ms2nts&acm=3.ms.1_4_1ms2nts.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mhtaco",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/190529_7fe7be9eebeh65h3ie04g6g9gc8hh_800x800.jpg",
      "iid": "1mhtaco",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mhtaco&acm=3.ms.1_4_1mhtaco.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mhtaco&acm=3.ms.1_4_1mhtaco.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1mhtaco.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威T恤男休闲字母印花661791",
      "type": 2,
      "orgPrice": 139,
      "props": [
        "美特斯邦威T恤男休闲字母印花661791"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 7,
      "price": 139,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mhtaco&acm=3.ms.1_4_1mhtaco.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msev9k",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200422_33fg1ke72fg051d85f71he5289cj0_771x1092.jpg",
      "iid": "1msev9k",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msev9k&acm=3.ms.1_4_1msev9k.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msev9k&acm=3.ms.1_4_1msev9k.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1msev9k.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "VIISHOW 哆啦A梦联名短袖T恤 DTDG018202",
      "type": 2,
      "orgPrice": 218,
      "props": [
        "VIISHOW 哆啦A梦联名短袖T恤 DTDG018202"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 0,
      "price": 218,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msev9k&acm=3.ms.1_4_1msev9k.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mspp0q",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200503_1e457ki082201l6927f97di000he1_800x800.jpg",
      "iid": "1mspp0q",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mspp0q&acm=3.ms.1_1_1mspp0q.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571334134_1525114462_9_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1525114462_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXducmo2XzkyNWZjYmRlZTk3ZDU5YjJmYTNmZDdkNTg3ZGNiNGMxXzE3XzhfNTcxMzM0MTM0XzRlOGZfMF85XzBfOTA3XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mspp0q&acm=3.ms.1_1_1mspp0q.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571334134_1525114462_9_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1525114462_30_0-dit_&cparam=MTU4ODc1NTczNF8xaXducmo2XzkyNWZjYmRlZTk3ZDU5YjJmYTNmZDdkNTg3ZGNiNGMxXzE3XzhfNTcxMzM0MTM0XzRlOGZfMF85XzBfOTA3XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_1_1mspp0q.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571334134_1525114462_9_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1525114462_30_0-dit_",
      "price_taglist": [
        
      ],
      "title": "2020年新款洋气短款T恤女设计感小众夏季半袖宽松阔腿裤套装",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xaXducmo2XzkyNWZjYmRlZTk3ZDU5YjJmYTNmZDdkNTg3ZGNiNGMxXzE3XzhfNTcxMzM0MTM0XzRlOGZfMF85XzBfOTA3XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "orgPrice": 57.14,
      "props": [
        "2020年新款洋气短款T恤女设计感小众夏季半袖宽松阔腿裤套装"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 16,
      "price": 39.99,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mspp0q&acm=3.ms.1_1_1mspp0q.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571334134_1525114462_9_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_2_1525114462_30_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msqsgy",
      "itemType": 7,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200504_5hbl3ah9jg779976a948jl25933gj_4800x7200.jpg",
      "iid": "1msqsgy",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msqsgy&acm=3.ms.1_1_1msqsgy.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571623797_545442911_10_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545442911_39_0-dit_&cparam=MTU4ODc1NTczNF8xMWtfMDIzZDVmZDFhNjgyMmIyN2JkYmM5ZDhiNjJhMDY5YWRfMTdfOV81NzE2MjM3OTdfNGU4Nl8wXzEwXzBfOTA3XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msqsgy&acm=3.ms.1_1_1msqsgy.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571623797_545442911_10_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545442911_39_0-dit_&cparam=MTU4ODc1NTczNF8xMWtfMDIzZDVmZDFhNjgyMmIyN2JkYmM5ZDhiNjJhMDY5YWRfMTdfOV81NzE2MjM3OTdfNGU4Nl8wXzEwXzBfOTA3XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_1_1msqsgy.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571623797_545442911_10_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545442911_39_0-dit_",
      "price_taglist": [
        
      ],
      "title": "牛油果绿色方领紧身上衣女夏新款露锁骨高腰针织短袖修身T恤",
      "type": 2,
      "cparam": "MTU4ODc1NTczNF8xMWtfMDIzZDVmZDFhNjgyMmIyN2JkYmM5ZDhiNjJhMDY5YWRfMTdfOV81NzE2MjM3OTdfNGU4Nl8wXzEwXzBfOTA3XzFfMF9ycy0zMTUxNC5ydC0xLnd0LTE=",
      "orgPrice": 50,
      "props": [
        "牛油果绿色方领紧身上衣女夏新款露锁骨高腰针织短袖修身T恤"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 0,
      "price": 35,
      "leftbottom_taglist": [
        {
          "color": "#C2C2C2",
          "bgColor": "#FAFAFA",
          "content": "推荐"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msqsgy&acm=3.ms.1_1_1msqsgy.46.86084-68998.8Jy8nrYch9gBy.ct_5101-sd_117-swt_46-imt_7-c_2_17_571623797_545442911_10_0-t_8Jy8nrYch9gBy-lc_17-pit_2-c1_31514_nil_nil_1_545442911_39_0-dit_&itemType=7",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mhtvqk",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/200415_87bal53b45ccfbl05cebaf5d740e5_1000x1000.jpg",
      "iid": "1mhtvqk",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mhtvqk&acm=3.ms.1_4_1mhtvqk.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mhtvqk&acm=3.ms.1_4_1mhtvqk.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1mhtvqk.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威短袖T恤男后背印花帅气体恤男潮707157",
      "type": 2,
      "orgPrice": 139,
      "props": [
        "美特斯邦威短袖T恤男后背印花帅气体恤男潮707157"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 5,
      "price": 139,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mhtvqk&acm=3.ms.1_4_1mhtvqk.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1msazva",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200418_702ibecf873i284129ce18lgh61ak_800x1200.jpg",
      "iid": "1msazva",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1msazva&acm=3.ms.1_4_1msazva.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1msazva&acm=3.ms.1_4_1msazva.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1msazva.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "情侣装男女士t恤短袖男女生韩版宽松体恤夏季新款百搭纯棉圆领",
      "type": 2,
      "orgPrice": 99,
      "props": [
        "情侣装男女士t恤短袖男女生韩版宽松体恤夏季新款百搭纯棉圆领"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 2,
      "price": 39.9,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1msazva&acm=3.ms.1_4_1msazva.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mho3tw",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/776a41/200426_7gahfcd7c6f7ek8929l5ggi8bjka4_750x1125.jpg",
      "iid": "1mho3tw",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mho3tw&acm=3.ms.1_4_1mho3tw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mho3tw&acm=3.ms.1_4_1mho3tw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 188 1106 1001 997 1270 618",
      "acm": "3.ms.1_4_1mho3tw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "时尚套装女2020韩版收腰雪纺衫+显瘦扣喇叭牛仔裤两件套潮",
      "type": 2,
      "orgPrice": 84.29,
      "props": [
        "时尚套装女2020韩版收腰雪纺衫+显瘦扣喇叭牛仔裤两件套潮"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 11160,
      "price": 54,
      "leftbottom_taglist": [
        {
          "color": "#FFFFFF",
          "bgColor": "#FF7500",
          "fmColor": "#FF7500",
          "content": "搭配购"
        }
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mho3tw&acm=3.ms.1_4_1mho3tw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1ms2vp8",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200412_67l77300gg683blfced93j520cd98_3999x5999.jpg",
      "iid": "1ms2vp8",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2vp8&acm=3.ms.1_4_1ms2vp8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1ms2vp8&acm=3.ms.1_4_1ms2vp8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1ms2vp8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "2件55新款白色短袖女韩版宽松洋气百搭刺绣小雏菊半袖t恤上衣",
      "type": 2,
      "orgPrice": 98,
      "props": [
        "2件55新款白色短袖女韩版宽松洋气百搭刺绣小雏菊半袖t恤上衣"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 890,
      "price": 29.8,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1ms2vp8&acm=3.ms.1_4_1ms2vp8.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1m859fs",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/55cf19/200415_3le5j7bal3jh6g52hj9ichd2l1166_1000x1000.jpg",
      "iid": "1m859fs",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1m859fs&acm=3.ms.1_4_1m859fs.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1m859fs&acm=3.ms.1_4_1m859fs.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "1525 1270",
      "acm": "3.ms.1_4_1m859fs.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "美特斯邦威夹克男休闲棒球服男生外套男士734153",
      "type": 2,
      "orgPrice": 239,
      "props": [
        "美特斯邦威夹克男休闲棒球服男生外套男士734153"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 28,
      "price": 239,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1m859fs&acm=3.ms.1_4_1m859fs.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    },
    {
      "tradeItemId": "1mrsrfw",
      "itemType": 6,
      "img": "https://s5.mogucdn.com/mlcdn/c45406/200404_6cca6dbkl2j55ec5d0ed05ee4fg6k_4999x7498.jpg",
      "iid": "1mrsrfw",
      "clientUrl": "https://h5.mogu.com/detail-normal/index.html?itemId=1mrsrfw&acm=3.ms.1_4_1mrsrfw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "promotion_taglist": [
        
      ],
      "link": "https://h5.mogu.com/detail-normal/index.html?itemId=1mrsrfw&acm=3.ms.1_4_1mrsrfw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "itemMarks": "-1",
      "acm": "3.ms.1_4_1mrsrfw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_",
      "price_taglist": [
        
      ],
      "title": "2020年春季复古方领上衣女设计感小众修身打底短款蕾丝衬衫",
      "type": 2,
      "orgPrice": 98.58,
      "props": [
        "2020年春季复古方领上衣女设计感小众修身打底短款蕾丝衬衫"
      ],
      "hasSimilarity": true,
      "useTitle": true,
      "lefttop_taglist": [
        
      ],
      "cfav": 30,
      "price": 69,
      "leftbottom_taglist": [
        
      ],
      "similarityUrl": "https://m.mogu.com/wall/relative?pid=8872&iid=1mrsrfw&acm=3.ms.1_4_1mrsrfw.46.1194-68998.8Jy8nrYch9gBy.sd_117-swt_46-imt_6-t_aQXMtrYcggev8-lc_17-pit_1-qid_39103-dit_&itemType=6",
      "officialRmdDesc": ""
    }
  ];
var insertData = [];
for(var i = 0;i<goodsData.length;i++){
    insertData.push({
        acm:goodsData[i]['acm'],
        title:goodsData[i]['title'],
        type:goodsData[i]['type'],
        img:goodsData[i]['img'],
        itemType:goodsData[i]['itemType'],
        iid:goodsData[i]['iid'],
        orgPrice:goodsData[i]['orgPrice'],
        price:goodsData[i]['price'],
        cfav:goodsData[i]['cfav'],
    })
}