const mongoose = require("mongoose")
const {unlink} = require("fs")

//增加用户管理
module.exports.addshop = async (mendianguanli) => {
    // console.log(mendianguanli)
    const {imgsId } = mendianguanli
    // console.log(imgsId)
    const {_id} = await mongoose
   
     .model("mendianguanli")
     .create(mendianguanli)
    //  console.log(_id)
     await mongoose
     .model("mendianguanli")
     .update({
        _id:_id
     },{
         $push:{
            imgsId:imgsId
         }
     })
    //  console.log(data1)
   return true
}
module.exports.getshop = async (mendianguanli) => {
   
   const data = await mongoose
   .model("mendianguanli")
   .find(mendianguanli) 
    let ar = data[0].imgsId
    for(let i = 0;i<ar.length;i++){
       if(ar[i]==ar[i]){
           ar.splice(i,1)
       }
    }
    // console.log(data)
    // console.log(ar)
//    const s = [...new Set(arr)]
//     console.log(s)
   return data
//    console.log(data[0].imgsId)
}

module.exports.delshop = async ({id}) => {
 const data=   await mongoose 
    .model("mendianguanli")
    .find({
        _id:id
    })
    // console.log(data)
    await unlink("public"+data[0].shopImg,()=>{})
    await unlink("public"+data[0].shopLicenceImg,()=>{})
    await unlink("public"+data[0].shopUserImg,()=>{})
    // console.log(data)
   await mongoose
   .model("mendianguanli")
   .remove({
       _id:id
   })
 }
 module.exports.changeshop = async (mendianguanli) => {
    await mongoose
    .model("mendianguanli")
    .find({_id:mendianguanli.id})
    .update({
        shopFeature: mendianguanli.shopFeature,
        shopAdd: mendianguanli.shopAdd,
        shopCorporate: mendianguanli.shopCorporate,
        shopImg: mendianguanli.shopImg,
        shopLicenceImg: mendianguanli.shopLicenceImg,
        shopLocation: mendianguanli.shopLocation,
        shopName: mendianguanli.shopName,
        shopTel: mendianguanli.shopTel,
        shopUserImg: mendianguanli.shopUserImg,
    })
    
 }