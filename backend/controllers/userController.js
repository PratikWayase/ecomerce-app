import validator from 'validator'
import UserModel from "../models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req,res) => {

}

const registerUser = async (req,res) => {
    
    try {

        const { name, email, password } = req.body;


        // check suer alredy exist
        const exist = await UserModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "user alredy exsits" })         
        }

        // vlaidate email foramt & strogn paswrod
        if (!validator.isEmail(email)) {
            return res.json ({success:false , message : "please enter vlaid  email"})  
        }

        if (password.length < 8) {
            return res.json ({success:false , message : "please enter strong password"})  
        }

        const salt = await bcrypt.getSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()


       
    } catch (error) {
        
   }
}

// route for admin login

const adminLogin = async (req,res) => {

}

export { loginUser, registerUser, adminLogin }

