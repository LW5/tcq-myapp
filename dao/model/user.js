const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const UsersSchema = new mongoose.Schema({
  userAcount: String,  //登录名
  userPwd: String,     //密码
  userPhone: Number,   //手机号
  userMail:String,     //邮箱
  userName:String,     //姓名
  userType:{
    default:0,
    type:Number
  },     //角色（两种角色）
  userStatus:{
    default:0,
    type:Number
  },    //状态 （三种状态）
  mendianguanliId: [{
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  }]
})

mongoose.model("user", UsersSchema, "user")
