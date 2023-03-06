import express from "express";
import { updatePassword, updateProfile , getMyEvent , getAllUsers, register, login,loginAdmin, whoami, logout, forgotPassword, resetPassword } from "../controllers/user.js";
import {  isAuthenticated, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/login/admin", loginAdmin);

router.get("/whoami", whoami);

router.get("/logout", logout);

router.put("/update/password", isAuthenticated, updatePassword);

router.put("/update/profile", isAuthenticated, updateProfile);

router.get("/users", getAllUsers);

router.get("/myevent", isAuthenticated, getMyEvent);

//Forgot Password
router.post("/password/forgot", forgotPassword);

//ResetPassword
router.put("/password/reset/:token", resetPassword);



export default router