import { NextFunction, Request, Response } from "express";
import { generatePassword } from "../../utils/passwordGenerator.js";
import UserRepository from "./user_repository.js";
import { generateJwtToken } from "../../utils/jwt_sign.js";
import jwt from "jsonwebtoken";
import { ApplicationError } from "../../middlwares/errorhandler.js";

export default class UserController {
  userRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email } = req.user;

      let user = await this.userRepository.findUser({ email });
      if (!user) {
        let password = await generatePassword();
        user = await this.userRepository.createAccount(
          username,
          email,
          password
        );
      }
      const token = generateJwtToken({ id: user.id, email: user.email });

      res.status(201).json({
        success: true,
        data: user,
        token: token,

        message: "authenticated successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  async getLoginStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.params.token;
      const payload = jwt.verify(token, process.env.JWT_SECRET || "xyz");

      if (typeof payload === "string" || !("id" in payload)) {
        throw new ApplicationError("Invalid token payload", 401);
      }
      const userData = await this.userRepository.findUser({ _id: payload.id });
      if(!userData) throw new ApplicationError("User not found", 404)

      res.status(200).json({
        message: "Logged in user data",
        data: userData,
        success: true,
      });
    } catch (err) {
      next(err);
    }
  }
}
