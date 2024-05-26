const express=require("express");
const router=express.Router();
const ownerModel=require("../models/owner-model");

router.get("/",(req,res)=>{
    res.send("hello");
});

router.post("/create",async function(req,res){
    let owners=await ownerModel.find();
    if(owners.length>0){
        return res
            .send(503)
            .send("you dont have permission to craete a new owner");
    }
    let {fullname,email,password}=req.body;
    let createdOwner=await ownerModel.create({
        fullname,
        email,
        password
    });
    res.status(201).send(createdOwner);
});





module.exports=router;
