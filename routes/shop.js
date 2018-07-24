var express = require('express');
var router = express.Router();

const {  addshop ,getshop,delshop,changeshop}  = require("../service/shop/shopService.js")
/* GET home page. */
router.post('/addshop',async function(req, res, next) {
    // console.log(req.body)
   res.send(await addshop(req.body) )
});
router.post('/getshop',async function(req, res, next) {
    // console.log(await getshop(req.body))
   res.send(await getshop(req.body) )
});
router.post('/delshop',async function(req, res, next) {
   res.send(await delshop(req.body) )
});
router.post('/changeshop',async function(req, res, next) {
    // console.log(req.body)
    res.send(await changeshop(req.body) )
 });
module.exports = router;
