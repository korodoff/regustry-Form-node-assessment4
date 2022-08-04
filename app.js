const express = require("express")
const checking = require("./Route/Checking")
const app = express();

app.use(express.json());




app.use("/auth",checking)// linking child with parent checking



app.get("/", function(req,res){
    console.log("running")
})



app.listen(9090,()=>{
    console.log("server Running")
})
