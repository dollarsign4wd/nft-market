// console. log (" started server .js")
const mongoose =require ("mongoose")
const express= require("express") 
const cors = require ("cors")


const app = express()
app.use (cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send ("nodeserver is running")
})

mongoose.connect("mongodb+srv://dollarsign4wd:dollarsign12@cluster0.oqplygx.mongodb.net/")
.then(res => console.log("mongoDB connected"))
.catch(err=> console.log(err))


app.listen(5000,()=>{
    console.log("listening on port 5000")
})
