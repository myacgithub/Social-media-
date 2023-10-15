const express=require('express');
const router=express.Router();

const postController=require('../controllers/PostController');

router.post('/create',postController.create);


router.post('/edit/:id',postController.edit);

router.post('/delete/:id',postController.delete);



module.exports=router;