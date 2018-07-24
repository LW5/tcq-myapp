var express = require('express');
var router = express.Router();

const {  chongwu,getChongwu }  = require("../service/chongwu/chongwuService.js")

router.post('/chongwuAdd',async function(req, res, next) {
    res.send(await chongwu(req.body) )
});

router.post('/getChongwu',async function(req, res, next) {
    res.send(await getChongwu(req.body) )
});
module.exports = router;
