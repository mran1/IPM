import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
let port = 7777;
let app = express();
app.listen(port, console.log("LISTENING ON PORT",port));

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
)

app.get("/",(req,res) => {
    res.send("IT IS WORKING");
})

