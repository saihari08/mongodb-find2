const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");


let app=express();
app.use(cors())

let employeesSchema=new mongoose.Schema({
id:Number,
firstname:String,
lastname:String,
email:String,
gender:String,
country:String,
department:String,
profilepic:String,
age:Number,
});

let Employees=new mongoose.model("employees",employeesSchema);

app.get("/employees",async(req,res)=>{
  let employeesData=await Employees.find();
   //let employeesData=await Employees.find().Select("email")
   //let employeesData=await Employees.find().and([{country:"Russia"},{gender:"female"}
//{age:{$gte:22,$ite:50}},]);
    //let employeesData=await Employees.find().limit(50).skip(150)
  
    res.json(employeesData);
})
app.listen(2120,()=>{
    console.log("Listening to port 2120")
})

let connectToMDB=async()=>{
 try{
     mongoose.connect("mongodb+srv://bsaihari08:bsaihari08@cluster0.zdkdgld.mongodb.net/DummyData?retryWrites=true&w=majority&appName=Cluster0")
     console.log("Successfully connected to MDB")
}catch(err){
    console.log("Unable to connected to MDB")
}
}

connectToMDB();