const Profile=require('../models/Profile');
const fs=require('fs');
const path=require('path');
const FilePath=path.join(__dirname,'../Uploads');
module.exports.create=async (req,res)=>{

    try{

        
        let profile=await Profile.create({
            bio:req.body.bio,
            avatar:req.file.path,
            userID:req.body.userID
        });


       return res.json(200,{
            profile
        })

    }
    catch (error) {
        
        return res.json(error);
    }


}
module.exports.delete=async (req,res)=>{

    try{

    const ProfileID=req.params.id;

     let FindAvatar=await Profile.findById(ProfileID);

      let cmpltString=FindAvatar.avatar;

      let exactData=path.basename(cmpltString);

      console.log("exact data is",exactData);

     await Profile.findByIdAndRemove(ProfileID);
   

    fs.readdir(FilePath,(err,files)=>{
        if(err){
            console.log(err);
        }

        
        files.forEach((file)=>{
 
            const DeletedFile=path.join(FilePath,exactData);
            fs.unlink(DeletedFile,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('file is deleted ');
                }
            })

        })
         
       

        return res.json(200,{
            "msg":"File is Deleted"
        })
    })

}

catch(err)
{
    return res.json(err);
}

}
module.exports.edit=async(req,res)=>{

   try {

        const Profile_ID=req.params.id;

      
       
        let Profile_USER=await Profile.findByIdAndUpdate(Profile_ID,{
            avatar:req.file.path,
            bio:req.body.bio
        },{new: true});


         return res.json(Profile_USER);
   }
   catch(err)
   {
    return res.json(err);
   }
}