const mongoose = require("mongoose")

//增加宠物
module.exports.chongwu = async (chongwu1) => {
      console.log(chongwu1)
      const { mendianGliId } = chongwu1
      const { _id:id_cw} = await mongoose
      .model("chongwuguanli")
      .create(chongwu1)

         await mongoose
            .model("mendianguanli")
            .update({
                _id:mendianGliId
            },{
              $push: {
                chongwuguanliId: id_cw
              }
            })  

          const data =  await mongoose
            .model("chongwuguanli")
            .find({_id:id_cw})
            .update({
              $push: {
                mendianguanliId: mendianGliId
              }
            })  
            console.log(data)
  }

//查询宠物
module.exports.getChongwu = async (getChongwu1) => {
        console.log(getChongwu1)
        const data = await mongoose
              .model("mendianguanli")
              .find(getChongwu1)
              .populate({
                path: "chongwuguanliId"
              })
              console.log(data)
              return data
}