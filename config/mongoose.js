const mongoose=require('mongoose');
const URL=`mongodb://127.0.0.1:27017/Workshop10`;
mongoose.connect(URL);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log("Database Connected to Succesfully");
})