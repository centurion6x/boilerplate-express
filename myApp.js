let dotEnv = require("dotenv").config() ;
let express = require('express');
let app = express();

//console.log("Hello World");
const absPathIndex = __dirname + "/views/index.html" ;
const absPathPublic = __dirname + "/public" ;
const fileServerMiddle = express.static(absPathPublic) ;
const absPathJson = __dirname + "/json/message.json"

app.use("/public",fileServerMiddle) ;

app.get("/", (req, res) => {
    res.sendFile(absPathIndex) ;
} ) ;

app.get("/json", (req,res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            "message" : "HELLO JSON"
        }) ;        
    } else {
        res.json({
            "message" : "Hello json"
        }) ;        
    }
        
}) ;




































 module.exports = app;
