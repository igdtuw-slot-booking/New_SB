import express from "express";
import { createEvent , updateEvent , deleteEvent , getEvent , getallEvent } from "../controllers/event.js";
//import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";         //use verifyadmin verifyuser from verifyToken.js as per the requirement ---like kis function ke liye kya verification needed hai

const router = express.Router();

//CREATE
router.post("/", createEvent);

//UPADATE
router.put("/:id", updateEvent);

//DELETE
router.delete("/:id", deleteEvent );

//GET
router.get("/:id", getEvent);

//GETALL
router.get("/", getallEvent);


export default router