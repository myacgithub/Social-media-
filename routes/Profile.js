
const express=require('express');
const router=express.Router();

const {upload}=require('../config/multer');

const ProfileController=require('../controllers/ProfileController');

router.post('/create',upload.single('avatar'),ProfileController.create);

router.put('/edit/:id',upload.single('avatar'),ProfileController.edit);

router.post('/delete/:id',ProfileController.delete);



module.exports=router;