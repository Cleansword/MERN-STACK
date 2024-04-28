const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/practicemongoDB`);

const userschema=mongoose.Schema({
    name:String,
    username:String,
    password:String
})

module.exports=mongoose.model("user",userschema);

