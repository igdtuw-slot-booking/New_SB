import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
//import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import eventRouter from "./routes/event.js";
import venueRouter from "./routes/venue.js";
import cors from "cors";
//import { errorH } from "./utils/errorH.js";


const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/user", userRouter);
app.use("/api/event", eventRouter);
app.use("/api/venue", venueRouter);

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT , ()=>{
    connect()
    console.log("Listening PORT...")
})