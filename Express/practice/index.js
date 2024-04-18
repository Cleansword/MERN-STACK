const express=require('express');
const app=express();
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));   

//line 4 and 5 are :: "setting up parsers for form"

app.set('view engine','ejs');

//line 9 is for :: set up ejs as view engine

app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,res){
    res.render("script");
});

//dynamic route

// app.get("/:username",function(req,res){
//     res.send(req.params.username);
// });

//  it is for line 22,23,23: is used to set a dynamic value  (username is a varibale)
// req.params.username ka mtlb hai sirf valriable ka value fetch hoga matlab colon(:) k bad wala value show hoga

app.get("/:username",function(req,res){
      res.send(`welcome , ${req.params.username}`);
     });

//back-tick (``) k andar likhne se javascript varibale hm use kr skte hai with the help of dollar($) 


app.get("/:username/:age",function(req,res){
    res.send(`welcome , ${req.params.username} ${req.params.age}`);
   });

   //using two varibale in the dynamic route
   //only those value are variable jiske piche colon(:) laga ho
   






app.listen(3000,function(){
    console.log("server is running now");
})


