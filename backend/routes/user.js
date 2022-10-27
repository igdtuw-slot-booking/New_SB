import express from "express";
import { updateUser , deleteUser , getUser , getallUser } from "../controllers/user.js"
const router = express.Router();
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

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
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser );

//GET
router.get("/:id", verifyUser, getUser);

//GETALL
router.get("/", verifyAdmin, getallUser);


export default router