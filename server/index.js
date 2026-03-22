import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config()

const app=express() ;
const port=process.env.PORT || 5000;
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",authRouter);

app.listen(port,()=>{
    console.log("server started")
    connectDb()
})