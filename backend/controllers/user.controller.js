import User from '../models/Userschems.js'
import bcrypt from 'bcryptjs'
import creatTokenAndSaveCookie from '../jwt/generateToken.js';

export const signup= async (req,res)=>{
    try {
    const {name,email,password,confirmpassword} =req.body;
    if(password !== confirmpassword) {
        return res.status(400).json({message:'Password do not match'});
    }

    const user =await User.findOne({email})
    if (user) {
        return res.status(400).json({message:'Email already exist'})
    }
    const salt= await bcrypt.genSalt(10);

    const hashed= await bcrypt.hash( req.body.password,salt);
    const newUser=await new User ({
        name,
        email,
        password:hashed
    });
   await newUser.save();
   if (newUser) {
    creatTokenAndSaveCookie(newUser._id,res);
 res.status(201).json({message:"User registered successfully",newUser})
   }
} 
catch (error) {
    console.log(error);
    res.status(500).json({message:'Server error'})
    } 
}
export const login= async(req,res) => {
    try {
        const {email,password} =req.body;
        const user= await User.findOne({email})
        const Match=await bcrypt.compare(password,user.password);
        if (!user || !Match) {
            return res.status(404).json({message:"Invalid User or Password"})
        }
        creatTokenAndSaveCookie(user._id,res);
        return res.status(201).json({message:'Logged in successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Server error'})
    }

}
export const logout= async(req,res)=> {
    try {
        res.clearCookie('jwt');
        res.status(201).json({message:'Logged out'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Server Error'})
    }
}
export const allUsers = async (req, res) => {
    try {
      const loggedInUser = req.user._id;
      const filteredUsers = await 
      User.find({ _id:{$ne:loggedInUser}}).select("-password");
      res.status(201).json(filteredUsers);
    } catch (error) {
      console.log("Error in allUsers Controller: " + error);
    }
  };
