const userModel= require('../models/userModel')

const loginController= async (req,res)=>{
    try{
        const {email,password}=req.body
        const user= await userModel.findOne({email,password})
        if(!user){
            return res.status(400).send('User Not Found')
        } 
        res.status(200).json({
            success:true,
            user
        })
    }catch{
        res.status(400).json({
            success:false,
            error
        })
    }
}
const Register = async(req,res)=>{
    try{
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            success:true,
            newUser
        })
    }catch{
        res.status(400).json({
            success:false,
            error
        })
    }
}


module.exports ={loginController, Register};