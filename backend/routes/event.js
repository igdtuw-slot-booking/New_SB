import express from "express";
import { createEvent , updateEvent , deleteEvent , getEvent , getallEvent } from "../controllers/event.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyUser, createEvent);

//UPADATE
router.put("/:id", updateEvent);

//DELETE
router.delete("/:id", verifyUser, verifyAdmin, deleteEvent );

//GET
router.get("/:id", verifyUser, verifyAdmin, getEvent);

//GETALL
router.get("/", verifyAdmin, getallEvent);


export default router