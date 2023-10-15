const Post=require('../models/Post');
module.exports.create=async(req,res)=>{


    try{

        let Post_User=await Post.create(req.body);
        return res.json(Post_User);
    }
    catch(err)
    {
        return res.json(err);
    }
   
}

module.exports.edit=async(req,res)=>{


    const PostId=req.params.id;

    let Post_User=await Post.findByIdAndUpdate(PostId,{
        
        post:req.body.post
    }, {new:true});
    return res.json(Post_User);

}
//pass the falg new 

module.exports.delete=async(req,res)=>{


    try{
    const Post_id=req.params.id;
    await Post.findByIdAndRemove(Post_id);

    return res.json("deleted");
    }

    catch(err)
    {
        return res.json(err);
    }
}
