const USER=require('../models/User');

const jwt=require('../config/jwtVerify');

module.exports.registration=async(req,res)=>{


    try {


         let user=await USER.create(req.body);

             return res.json(user);

    } catch (error) {
        
        return res.json(error);
    }

}

module.exports.login=async (req,res)=>{
   try
    {
          let user=await USER.findOne({email:req.body.email});

          if(user.password===req.body.password)
          {
           
              const token=await jwt.signAccessToken(user.id);
            
             return res.json(token);
          }
          else{
            return res.json("wrong password");
          }

    }
    catch(err){
        return res.json(err);
    }

}