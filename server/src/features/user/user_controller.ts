import { NextFunction, Request, Response } from "express";
import { generatePassword } from "../../utils/passwordGenerator.js";
import UserRepository from "./user_repository.js";

export default class UserController {
  userRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email } = req.user;
    
      let user = await this.userRepository.findUser(email);
      if (!user) {
        let password = await generatePassword();
        user = await this.userRepository.createAccount(username, email, password);
      }

      res.status(201).json({
        success: true,
        data: user,
        message: "authenticated successfully",
      });
    } catch (err) {
      next(err);
    }
  }
}
