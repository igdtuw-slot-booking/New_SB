import express from "express";
import { createEvent , updateEvent , deleteEvent , getEvent , getallEvent } from "../controllers/event.js"
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