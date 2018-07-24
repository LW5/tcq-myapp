const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ChongzhuSchema = new mongoose.Schema({
  memberPhone: Number,//电话号码
  memberAcount: String,//昵称
  memberName:String ,//真实姓名
  menberCard:String,//会员卡
  memberImg:String,//头图
  memberAdd:String,//送货地址
  memberArea:String,//区域
  memberPoint:String,//积分
  chongwuId:[{
    type: Schema.Types.ObjectId,
    ref:"chongwu"
  }]
})

mongoose.model("chongzhu", ChongzhuSchema, "chongzhu")