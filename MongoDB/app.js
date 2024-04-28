const express=require('express');
const app=express();
const usermodel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("sagar");
})


//all mongoDB commands are assynchronous

app.get('/create',async (req,res)=>{  
    let user=await usermodel.create({   //this is used to add a data in database
        name:"sonali",
        username:"sona",
        password:"sonakri"
    })
    res.send(user);
})
app.get('/read',async (req,res)=>{
    let user=await usermodel.find(); //this is used to read a data in database
    res.send(user);
})
app.get('/update',async (req,res)=>{
    let user=await usermodel.findOneAndUpdate({name:"sonali"},{name:"panda"},{new:true});  ////this is used to update a data in database
    res.send(user);
})
app.get('/delete',async (req,res)=>{
    let user=await usermodel.findOneAndDelete({name:"sohail"}); //this is used to delete a data in database
    res.send(user);
})



app.listen(3000);