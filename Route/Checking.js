const Routes = require("express").Router()//creating short form
const { Router } = require("express")
const {check,validationResult} = require("express-validator")
const {user}= require("../db")

Routes.post("/signup",
check('email', "Provide Valid Email").isEmail(), 
check('password', "Provide Password Longer Than 6 Character").isLength({min:6}),
async function(req,res){
    const{email,password} = req.body

    const err = validationResult(req) // is there is any error in req ll sort
   if(!err.isEmpty()){
    return res.status(404).json({
        err: err.array()
    })
   }
    //checking our postEmail and password with dataBase

    let user = user.find((user)=>{
        return user.email=== email
    })
    if(user){
        res.status(400).json({
            "err":[{
                "msg": "this user is already existed"
            }]
        })
    }
    let hashpassword = await bcrypt.hash(password,10)
    user.push({email,password: hashpassword})
    console.log(hashpassword)
    res.send("checking page is working")
  
    console.log(email,password)
    if(password.length<6){

    }
    res.send("checking passed")
})

Routes.get("/all", (req,res)=>{
    res.json(user)
})

module.exports=Routes;