'use strict';
const express = require('express');
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.status(200).send('Hello World'));

app.post('/person',(req, res)=>{
    const {age} = req.body;
    let parsedAge = parseInt(age)+5;
    console.log( typeof res)
    res.status(201).send(`${parsedAge}`);
})

function start (port){
    app.listen(port,()=>console.log(`server is working on port ${port}`))
}
module.exports={
   app: app,
   start: start
}


// app.post('/person',(req,res)=>{
//     const {name,age,gender}=req.query;
//     let newAge=parseInt(age)+5;
//     res.status(201).send({name:name , gender:gender , age:`after 5 years you will be ${newAge}`})