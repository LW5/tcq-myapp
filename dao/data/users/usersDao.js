const mongoose = require("mongoose")
//picApi
module.exports.picApi = async (picApi1) => {
  console.log(picApi1)
  await mongoose
    .model("user")
    .find()
}

module.exports.getUsers = async (getUsers1) => {
  console.log(getUsers1)
  const data =  await mongoose
    .model("user")
    .find(getUsers1)
    .populate({
      path: "mendianguanliId"
    })
    const { mendianguanliId } = data[0]
    console.log(data)
    return data
}

  module.exports.addUsers = async (users) => {
    console.log(users)
    const data =  await mongoose
      .model("user")
      .create(users)
      console.log(data)
      return data
  }

  module.exports.mendian = async (mendian1) => {
    console.log(mendian1)
    const { userGl_id } = mendian1
    const { _id:mdGl_id } =  await mongoose
      .model("mendianguanli")
      .create(mendian1)

      //门店门店管理之间相互绑定
      await mongoose
            .model("mendianguanli")
            .update({
                _id:mdGl_id
            },{
              $push: {
                userId: userGl_id
              }
            })  

      await mongoose
      .model("user")
      .update({
          _id:userGl_id
      },{
        $push: {
          mendianguanliId: mdGl_id
        }
      })  
      return mdGl_id
  }

  module.exports.shangpin = async (shangpin1) => {
    console.log(shangpin1)
    const { sp_id } = shangpin1
      const { _id:id_sp} = await mongoose
      .model("shangpinguanli")
      .create(shangpin1)
         await mongoose
            .model("mendianguanli")
            .update({
                _id:sp_id
            },{
              $push: {
                shangpinguanliId: id_sp
              }
            })  
  }


  module.exports.fuwu = async (fuwu1) => {
    console.log(fuwu1)
    const { fw_id } = fuwu1
      const { _id:id_fw} = await mongoose
      .model("fuwuguanli")
      .create(fuwu1)
         await mongoose
            .model("mendianguanli")
            .update({
                _id:fw_id
            },{
              $push: {
                fuwuguanliId: id_fw
              }
            })  
  }
  
  // module.exports.chongwu = async (chongwu1) => {
  //   console.log(chongwu1)
  //   const { cw_id } = chongwu1
  //     const { _id:id_cw} = await mongoose
  //     .model("chongwuguanli")
  //     .create(chongwu1)
  //        await mongoose
  //           .model("mendianguanli")
  //           .update({
  //               _id:cw_id
  //           },{
  //             $push: {
  //               chongwuguanliId: id_cw
  //             }
  //           })  
  // }