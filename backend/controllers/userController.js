import validator from 'validator'
import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log("Login error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
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

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json ({success:true,token})


       
    } catch (error) {
        
        console.log(error);
        res.json({success:false,message:error.message})
   }
}

// route for admin login

const adminLogin = async (req, res) => {
    
    try {

        const { email, password } = req.body
        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password, process.env.JWT_SECRET);

            res.json({ success: true, token })
            
        }
        else {
            res.json({ success: false, message: "invalid credentials" })
            

        }
    } catch (error) {

         
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

export { loginUser, registerUser, adminLogin }

