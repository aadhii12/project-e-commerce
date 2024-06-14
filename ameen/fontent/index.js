const express=require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const EmployeeModel = require('./models/Employee')

const app=express()

app.use(express.json())
app.use(cors())
 mongoose.connect("mongodb+srv://aadhi9760:<password>@cluster0.lotogoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/employee");

 app.post('/create',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=> res.json(err))

 })
 app.listen (3000, () =>{
    console.log("server is running")
})