import express from "express";
import { createVenue , updateVenue , deleteVenue , getVenue , getallVenue } from "../controllers/venue.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createVenue);

//UPADATE
router.put("/:id", verifyAdmin, updateVenue);

//DELETE
router.delete("/:id", verifyAdmin, deleteVenue );

//GET
router.get("/:id", verifyUser, getVenue);

//GETALL
router.get("/", verifyUser, getallVenue);


export default router