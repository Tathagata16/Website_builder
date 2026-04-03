import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import userRouter from './routes/user.routes.js'
import websiteRouter from "./routes/website.routes.js";


const app=express() ;
const port=process.env.PORT || 5000;
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))

// console.log("env check",process.env.OPENROUTER_API_KEY);
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",authRouter);
app.use("/api/user", userRouter);
app.use("/api/website", websiteRouter);

app.listen(port,()=>{
    console.log("server started on port "+port);
    connectDb()
})