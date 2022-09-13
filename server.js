const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const student = require('./resource/data/en/students.json')
const gear = require('./resource/data/en/equipment.json')
app.use(express.static( __dirname + '/' ));
app.use(express.json());

app.get("/",(req,res) => {
    res.send("use /student to get student List")
})
app.get("/students",(req,res)=>{
    res.send(student)
})
app.get("/students/:id",(req,res)=>{
    const {id} = req.params;
    try{
        console.log(id+" "+student.length)
        if (id > student.length){
            throw new Error();
        }
        res.send(student[id-1])
    } catch {
        console.log(id+" "+student.length);
        res.send(`Student ID can only be number and between 1-${student.length}`);
    }
})

<<<<<<< Updated upstream:server.js
app.get("/*",(req,res)=>{
    res.sendfile('error.html')
=======
app.get("/gears",(req,res)=>{
    res.send(gear)
})

app.get("/gears/:id",(req,res)=>{
    const {id} = req.params;
    try{
        if (id > gear.length){
            throw new Error();
        }
        res.send(gear[id])
    } catch {
        console.log(id+" "+gear.length);
        res.send(`Equipment ID can only be number and between 1-${gear.length-1}`);
    }
>>>>>>> Stashed changes:index.js
})



app.listen(port,()=>{
    console.log(`Node.JS on port ${port}`);
})

