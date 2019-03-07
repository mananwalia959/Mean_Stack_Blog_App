require('dotenv').config({ path:'./variables.env'})//Setting up Enviorment Varables First and Foremost

const express= require('express');

const app = express();
const port = process.env.PORT || 8080;


app.get('/',(req,res)=>{
    res.json('Hello World');
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


