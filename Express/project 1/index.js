const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});
    })
    
})

app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        res.redirect("/");
    });
})

app.post('/edit',function(req,res){
   fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,function(err){
    res.redirect("/");
   });
})

app.get('/file/:filename',(req,res)=>{
   fs.readFile(`files/${req.params.filename}`,"utf-8",function(error,filedata){
    res.render('show',{filename:req.params.filename,filedata:filedata});
   });  
})

app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{filename:req.params.filename});
})




app.listen(3000);