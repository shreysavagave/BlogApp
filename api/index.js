import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from '../api/routes/user.route.js'
import authRoute from '../api/routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO_SERVER);

const app = express();

app.use(express.json());


app.use('/api/user', userRoute)

app.use('/api/auth', authRoute);

app.get('/',(req,res)=>{
  res.send("hello")
})

app.use((err,req,res,next)=>{
  const statuscode = err.statuscode || 500
  const message = err.message

  res.status(statuscode).json({
    success:false,
    statuscode,
    message,
  })
});

app.listen(3000,()=>{
  console.log("server run on port 3000")
})