let dotEnv = require("dotenv").config() ;
let express = require('express');
let bodyParser = require("body-parser") ;
let app = express();

//console.log("Hello World");
const absPathIndex = __dirname + "/views/index.html" ;
const absPathPublic = __dirname + "/public" ;
const absPathJson = __dirname + "/json/message.json" ;

const fileServerMiddle = express.static(absPathPublic) ;
const urlEncodedMiddle = bodyParser.urlencoded({extended: false}) ;

app.use("/public",fileServerMiddle) ;
app.use("/name", urlEncodedMiddle) ;
app.use(logger)

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

app.get("/now", (req,res,next) => {
    req.time = new Date().toString() ;
    next() ;
}, (req, res, next)=>{
    res.send ({time : req.time});
}) ;

app.get("/:word/echo",(req,res,next) => {
    res.send({echo: req.params.word}) ;
    next() ;
} ) ;

app.route("/name").get( (req,res,next)=>{
    let fullname = req.query.first + " " + req.query.last ;
    res.send({name:fullname}) ;
    next() ;
}).post((req,res,next)=> {
    let fullname = req.body.first + " " + req.body.last ;
    res.send(fullname) ;
    next() ;
}) ;

function logger(req, res, next) {
    let outputString = req.method + " " + req.path + " - " + req.ip ;
    console.log(outputString); 
    next() ;   
}


































 module.exports = app;
