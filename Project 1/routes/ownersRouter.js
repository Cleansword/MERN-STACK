const express=require("express");
const router=express.Router();
// const ownerModel=require("../models/owner-model");

router.get("/",(req,res)=>{
    res.send("hello");
});

if(process.env.NODE_ENV==="development");

router.post("/create",function(req,res){
    res.send("hello");
})



module.exports=router;
