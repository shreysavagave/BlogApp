import User from "../models/User.Model.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email || username === '', password === '', email === '') {
    next(errorhandler(500,'all fields are required'));
  }
  
  const hashedpassword = bcryptjs.hashSync(password , 10);
  const newUser = new User({
    username,
    password: hashedpassword,
    email,
  })
  
  try{
    await newUser.save();
    res.json("signin succesfull");
  }
  catch(error){
    next(error);
  }
}

export const signin = async (req,res,next)=>{
  const {email,password}= req.body;
  if(!email || !password, email =="", password==''){
    next(errorhandler(400,'all fields are required'));
  }
  try{
    const user = await User.findOne({ email });
    if(!user){
      next(errorhandler(404,"user not found"))
    }

    const validPassword = bcryptjs.compareSync(password, user.password);

    if(!validPassword){
      next(errorhandler(400,"invalid password"));
    }
    const token  = jwt.sign(
      {id: user._id}, process.env.JWT_KEY
    )

    const {password:pass,...rest} = user._doc ;
    res.status(200).cookie("access_token", token ,{
      httpOnly:true
    }).json(rest);
  }
  catch(error){
    next(error)
  }
}