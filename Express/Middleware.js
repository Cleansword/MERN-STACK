const express=require('express');
const app=express();
//middleware  : it always run before any route

app.use(function(req,res,next){
    console.log("i am middleware");
    next();
})


//route
app.get("/",function(req,res){
    res.send("hello");
})

app.listen(3000);