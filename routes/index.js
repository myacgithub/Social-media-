const express=require('express');
const router=express.Router();


const jwt=require('../config/jwtVerify');



router.use('/Post',jwt.VerifyAccessToken,require('./Post'));

router.use('/Profile',jwt.VerifyAccessToken,require('./Profile'));

router.use('/User',require('./User'));



module.exports=router;