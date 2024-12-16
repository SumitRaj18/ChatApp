import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userroutes.js'
import messageRoutes from './routes/message.router.js'
import path from 'path'
import cors from 'cors'
import { app, server } from './SocketIO/server.js';
dotenv.config();

const PORT= process.env.PORT || 5001
const URI = process.env.MONGODB_URI 
app.use(cors())
app.use(express.json())
app.use(cookieParser())

try{
    mongoose.connect(URI);
    console.log("MongoDB Connected")
} catch(error) {
    console.log(error)
}

app.use("/api/user",userRoutes)
app.use("/api/message",messageRoutes)

if (process.env.NODE_ENV  === 'production') {
  const dirPath = path.resolve();
  app.use(express.static("./frontend/dist"));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(dirPath,'./frontend/dist','index.html'));
  })
}
server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})  
