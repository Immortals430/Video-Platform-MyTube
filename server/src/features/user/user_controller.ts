import { NextFunction, Request, Response } from "express";
import UserRepository from "./user_repository.js";

export default class UserController {
  userRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(req : Request, res : Response, next : NextFunction){
    try{

      // console.log(req.user)
      // let user = await this.userRepository.signup(username, email, password)
      // res.status(201).json({
      //   success: true,
      //   data: user,
      //   message: "user created successfully",
      // }
      // )
    }
    catch(err){
      next(err)
    }
  }
  
}
