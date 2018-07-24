const mongoose=require('mongoose')
// const fs=require('fs')

module.exports.addImg=async imgs=>{
  const data =  await mongoose
   .model('imgs')
   .create(imgs)
//    .find()
  return data
  // console.log(data)
}

// module.exports.add=async imgs=>{
  // await mongoose
  // .model('imgs')
  // .update({
    // mendianguanliId
  // })
// }


