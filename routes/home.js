var express = require('express')
var router = express.Router()

var homeReqest = require('../controller/homeController')

router.get('/home/multidata', homeReqest.multiData)
router.get('/home/goods', homeReqest.getProductList)

// router.get('/home/insertMultiData', homeReqest.insertMultiData)

module.exports = router;