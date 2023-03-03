import express from "express";
import { createVenue , updateVenue , deleteVenue , getVenue , getallVenue } from "../controllers/venue.js";
import { isAuthenticated } from "../utils/verifyToken.js";
         //use verifyadmin verifyuser from verifyToken.js as per the requirement ---like kis function ke liye kya verification needed hai

const router = express.Router();

//CREATE
router.post("/create", createVenue);

//UPADATE
router.put("/:id", updateVenue);

//DELETE
router.delete("/:id", deleteVenue );

//GET
router.get("/:id", isAuthenticated, getVenue);

//GETALL
router.get("/svenues", isAuthenticated, getallVenue);


export default router