// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// const cookieName = process.env.PROJECT_NAME || "MyTube";
// const jwtSecret = process.env.JWT_SECRET || "xyz"

// // verify token from cookie
// export const jwtAuth = (req : Request, res : Response, next : NextFunction) => {
//     const token = req.cookies[cookieName];
//     try{
//         const payload = jwt.verify(token, jwtSecret);
//         req.user = payload
//         next();
//     }
//     catch(err){
//         res.status(401).json({ message: "Unauthorised" });
//     }
// }