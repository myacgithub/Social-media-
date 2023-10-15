const mongoose=require('mongoose');
const schema=new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }

},{
    timestamps:true
});

const User=mongoose.model('User',schema);
module.exports=User;