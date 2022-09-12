const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const student = require('./resource/data/en/students.json')
const gear = require('./resource/data/en/equipment.json')
app.use(express.static( __dirname + '/' ));
app.use(express.json());
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

app.get("/*",(req,res)=>{
    res.sendfile('error.html')
})



app.listen(port,()=>{
    console.log(`Node.JS on port ${port}`);
})
