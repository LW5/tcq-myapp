var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var imgSchema = new Schema({
    mendianguanliId: [{
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  }],
    url:{
        type:String,
    }
});

mongoose.model("imgs",imgSchema,"imgs")