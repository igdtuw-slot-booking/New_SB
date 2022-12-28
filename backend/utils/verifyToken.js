import jwt from "jsonwebtoken";

import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next()
    });
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            if (err) return next(createError(403, "You are not authorized!"));
        }
    });
};

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, () => {
        if(req.user.isAdmin){
            next();
        } else{
            if (err) return next(createError(403, "You are not authorized!"));
        }
    });
};

export const sendToken = (user, statusCode, res) => {
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
    //options for cookie
    const options= {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 *60 *60 *1000 
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};

