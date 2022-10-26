import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import eventRouter from "./routes/event.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("MongoDB connected")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
});


//middleware

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/event", eventRouter);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});



app.listen(8877 , ()=>{
    connect()
    console.log("Listening to 8877...")
})