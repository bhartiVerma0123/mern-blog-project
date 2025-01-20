const { LoginModel } = require("../models/loginmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Login Controller
const LoginController = async(req,res)=>{
  const user = await LoginModel.findOne({email:req.body.email,password:req.body.password})
  if(user != null){
    res.status(200).json({message: "Login Successfully", success: true});
}
}

module.exports =  LoginController ;
