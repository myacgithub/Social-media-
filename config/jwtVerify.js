const jwt=require('jsonwebtoken');


    signAccessToken=(userId)=>{

        return new Promise((resolve,reject)=>{


         const payload={
            name:""
         }
         const secret=`${process.env.SECRET_KEY}`
          const option={
            expiresIn:'1h'
          }
         jwt.sign(payload,secret,option,(err,token)=>{

            if(err){
                return reject(err);
            }
            else{
                return resolve(token);
            }
         })

        });
    }

     VerifyAccessToken=(req,res,next)=>{

        if(!req.headers['authorization'])
        {
          return res.json({"msg":"invalid"});
        }

        const authHeader=req.headers['authorization'];
        const bearerToken=authHeader.split(' ');
        const token=bearerToken[1];
        // console.log(token);
        const Secret=`${process.env.SECRET_KEY}`
        jwt.verify(token,Secret,(err,payload)=>{
             if(err){
                return res.json({"msg":"invalid"});
             }

             req.payload=payload;
             console.log(req.payload)
        })

        next();
     }
module.exports={
    signAccessToken,
    VerifyAccessToken
}