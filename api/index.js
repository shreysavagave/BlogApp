import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import user from '../api/routes/user.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO);

const app = express();

app.get('/test', user)

app.listen(3000,()=>{
  console.log("server run on port 3000")
})