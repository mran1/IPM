import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
let port = 7777;
let app = express();
var user = null;
var admin = null;
app.listen(port, console.log("LISTENING ON PORT",port));

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
)

app.get("/",(req,res) => {
    res.send("IT IS WORKING");
})

app.post("/createRoom",(req,res) => {
    let {userId, adminId} = req.body;
    if(userId && adminId){
        user = userId;
        admin = adminId;
        res.send({userId, adminId})
    }
})
app.get("/users",(req,res) => {
    res.send({userId:user,adminId:admin})
})

