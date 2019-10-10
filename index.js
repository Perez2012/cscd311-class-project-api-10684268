const express = require('express');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/Hall');

mongoose.connection.once('open',()=>{
    console.log('Connection has been made');
}).on('err',(err)=>{
    console.log('connection error:',err);
});

const app = express();

const http= require('http').Server(app).listen(80);

app.use("/html",express.static("./html"))
app.get("/",(req,res)=>{
    res.sendFile(///C:/Users/Abednego%20Barnor/Desktop/cscd311/Html/home.html),
});

app.listen(3000,(req,res)=>{
    console.log('Web server started')
});


const StudSchema= new mongoose.Schema({
    Stud_id: String,
    firstName: String,
    lastName: String,
    hallName: String
});

const Student = mongoose.model('stud',StudSchema);