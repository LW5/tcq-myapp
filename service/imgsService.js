const {addImg ,getImgsByPage,removePic,add}=require('../dao/imgsDao')

module.exports.addImg=async img=>{
    return await addImg(img)
}

module.exports.getImgsByPage=async img=>{
    // console.log(await getImgsByPage(img))
    return await getImgsByPage(img)
}

module.exports.removePic=async _id=>{
    
     await removePic(_id)
     return await getImgsByPage(img)
}
module.exports.add=async img=>{  
    return await add(img)
}
