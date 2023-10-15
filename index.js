const express=require('express');

const PORT=8000;

const db=require('./config/mongoose');

const app=express();

app.use(express.json());
app.use(express.urlencoded());




app.use('/',require('./routes/index'));


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${8000}`);
})
//authentication tokens should be working fine