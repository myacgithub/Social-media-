const multer=require('multer');
const path=require('path');

 const uploadDir=path.join(__dirname,'../Uploads');

const storage=multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,uploadDir);
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now();
        const fileExtenshion=path.extname(file.originalname);
        cb(null,`${file.fieldname}-${uniqueSuffix}${fileExtenshion}`);
    }
});

const upload=multer({
    storage:storage,
});
module.exports={
    upload
};