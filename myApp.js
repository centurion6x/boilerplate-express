let express = require('express');
let app = express();

//console.log("Hello World");
absPathIndex = __dirname + "/views/index.html" ;

app.get("/", (req, res) => {
    res.sendFile(absPathIndex) ;
} ) ;



































 module.exports = app;
