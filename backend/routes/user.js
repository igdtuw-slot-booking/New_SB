import express from "express";
import { updateUser , deleteUser , getUser , getallUser } from "../controllers/user.js"
const router = express.Router();
//import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";         //use verifyadmin verifyuser from verifyToken.js as per the requirement ---like kis function ke liye kya verification needed hai

/*
router.get("/checkauth", verifyToken, (req,res,next)=>{
    res.send("hello user you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("hello user you are logged in and can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("hello user you are logged in and can delete all account");
});

*/

//UPADATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser );

//GET
router.get("/:id", getUser);

//GETALL
router.get("/", getallUser);


export default router