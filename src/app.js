const express = require('express');
const app = express();//app is created

// app.use((req,res) => {
//     res.send("hello world");
// })
app.use("/hlo90",(req,res) => {
    res.send("hello world");
})
app.use("/hlo",(req,res) => {
    res.send("helloooo world");
})

app.listen(3000,() => {
    console.log("chal rha hai");
    
})