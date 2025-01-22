import User from "../models/User.Model.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";

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