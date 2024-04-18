const express=require('express');
const app=express();


//syntax  

// app.get("route",fileHandler(request,response){
        // response.send(" set your data")
// })


app.get("/",function(req,res){
    res.send("hello jii");
})

app.get("/profile",function(req,res){
    res.send("i am under the response , kya kaise ho")
})

app.listen(3000);

