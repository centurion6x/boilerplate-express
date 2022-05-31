let express = require('express');
let app = express();

//console.log("Hello World");
absPathIndex = __dirname + "/views/index.html" ;
absPathPublic = __dirname + "/public" ;
const fileServerMiddle = express.static(absPathPublic) ;
app.use("/public",fileServerMiddle) ;
app.get("/", (req, res) => {
    res.sendFile(absPathIndex) ;
} ) ;



































 module.exports = app;
