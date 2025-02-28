// http - protocol-domain - path
// query parameters : ?key=value
const http = require("http");

const express = require("express")

const app =express();

app.get("/",(req,res)=>{
    return res.send("Hello from Homepage")
});
app.get("/about",(req,res)=>{
    return res.send("Hello from About page" + 'hey' + req.query.name)
});

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));

app.listen(8000, ()=>  console.log("Server Started"));