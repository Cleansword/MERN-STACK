const express=require('express');
const app=express();



//route
app.get("/",function(req,res,next){
    return next(new Error("something went wrong"));
})

//handling error

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000);