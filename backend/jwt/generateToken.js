import jwt from 'jsonwebtoken'

const creatTokenAndSaveCookie =(userId,res)=>{
    const token= jwt.sign({userId}, process.env.JWT_TOKEN,{
        expiresIn:'5d'
    });
    res.cookie("jwt",token,{
        httpOnly:true,
    })
};
export default creatTokenAndSaveCookie;