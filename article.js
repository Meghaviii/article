


const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname+'/public'));
const HTTP_PORT = process.env.PORT || 8000;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  
  app.get("/static", (req, res) => {
    res.render("static");
});
  
// // Route to display dynamic src images
// app.get("/dynamic", (req, res) => {
//     imageList = [];
//     imageList.push({ src: "/WEB/a2/toronto1.jpg", name: "flask" });
//     res.render("dynamic", { imageList: imageList });
// });

try{

app.get('/', function(req, res)
{
    
        res.sendFile(path.join(__dirname, "article.html"));
    });

}catch(e){
    console.log("Error");
}

app.listen(HTTP_PORT);
console.log('Server started at http://localhost:' + HTTP_PORT);

