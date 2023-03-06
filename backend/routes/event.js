import express from "express";
import { createEvent , updateEventStatusAdmin , updateEventDesc , getSingleEvent , getallEvent, countByStatus, myEvents, updateEventByUser, booking } from "../controllers/event.js";
import { verifyAdmin, isAuthenticated } from "../utils/verifyToken.js";         //use verifyadmin verifyuser from verifyToken.js as per the requirement ---like kis function ke liye kya verification needed hai

const router = express.Router();

//CREATE
router.post("/create", isAuthenticated, createEvent);

//UPADATE EVENT STATUS --by admin
router.put("/:id", isAuthenticated, updateEventDesc);

//DECLINE EVENT --by admin
//router.delete("/:id", verifyAdmin, deleteEvent );

//GET LOGGED IN USER EVENTS
router.get("/myevents", isAuthenticated, myEvents);

//GET
router.get("/find/:id", verifyAdmin, getSingleEvent);


//GETALL
router.get("/", verifyAdmin, getallEvent);
router.get("/booking", isAuthenticated, booking);

router.get("/count", countByStatus);

//UPDATE EVENT STATUS  --by admin
router.put("/adminCheck/:id", verifyAdmin, updateEventStatusAdmin);

//UPDATE EVENT STATUS TO CANCEL --by user
router.put("/userCancel/:id", isAuthenticated, updateEventByUser);


export default router