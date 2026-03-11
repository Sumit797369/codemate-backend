const express = require('express');
const app = express();//app is created

app.use((req,res) => {
    res.send("hello world");
})

app.listen(3000,() => {
    console.log("chal rha hai");
    
})