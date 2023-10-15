const mongoose=require('mongoose');
const schema=new mongoose.Schema({

    post:{
        type:String
    },
    userID:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }


},{
    timestamps:true
});

const Post=mongoose.model('Post',schema);
module.exports=Post;