const express=require('express');
const socket=require('socket.io');
const http=require('http');
const {Chess} = require('chess.js');

const path=require('path');
const { log } = require('console');

const app=express();
const server=http.createServer(app);
const io=socket(server);

const chess=new Chess();
let players={};
let currentplayer="w";

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));




app.get("/",(req,res)=>{
    res.render("index",{title:"Chess game"});
});

io.on("connection",function(uniquesocket){
    console.log("connected");
    // uniquesocket.on("disconnect",function(){
    //     console.log("disconnected");
    // })

    // uniquesocket.on("churan",function(){
    //     console.log("churan recieved");
    //     io.emit("churan papdi");
    // })

    if(!players.white){
        players.white=uniquesocket.id;
        uniquesocket.emit("playerRole","w");
    }
    else if(!players.black){
        players.black=uniquesocket.id;
        uniquesocket.emit("playerRole","b");
    }
    else{
        uniquesocket.emit("spctatorRole");
    }

    uniquesocket.on("disconnect",function(){
        if(uniquesocket.id===players.white){
            delete players.white;
        }
        else if(uniquesocket.id===players.black){
            delete players.black;
        }
        
    })
});










server.listen(3000,function(){
    console.log("connected to the server");
});