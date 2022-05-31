let express = require('express');
let app = express();

//console.log("Hello World");
const absPathIndex = __dirname + "/views/index.html" ;
const absPathPublic = __dirname + "/public" ;
const fileServerMiddle = express.static(absPathPublic) ;

app.use("/public",fileServerMiddle) ;

app.get("/", (req, res) => {
    res.sendFile(absPathIndex) ;
} ) ;

app.get("/json", (req,res) => {
    res.json({
        "message" : "Hello JASON"
    })
}) ;




































 module.exports = app;
