var express = require('express');
var router = express.Router();

const {uploadFile} = require('../util/upload')

const { addImg } = require("../service/imgsService")

router.post('/upload', async function (req, res, next) {
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'mendianguanli',
		//路径
		path: "./public/img/",
	})
	// console.log(await addImg(data))
	res.send(await addImg(data))

});

module.exports = router;