require('dotenv').config({ path:'./variables.env'})//Setting up Enviorment Varables First and Foremost

/**
 * Routing App Setup
 */
const express= require('express');
const app = express();


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODBURL,
    { useNewUrlParser: true })
.then(()=>{
    console.log(`Database Connected Successfully`);
})
.catch((err)=>{
    console.log(err)
})




const port = process.env.PORT || 8080;


app.get('/',(req,res)=>{
    res.json('Hello World');
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


