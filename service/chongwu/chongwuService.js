const { chongwu,getChongwu } = require("../../dao/data/chongwu/chongwuDao.js")

  module.exports.chongwu = async (chongwu1) => {
    return await chongwu(chongwu1) 
  }

  module.exports.getChongwu = async (getChongwu1) => {
    return await getChongwu(getChongwu1) 
  }
  