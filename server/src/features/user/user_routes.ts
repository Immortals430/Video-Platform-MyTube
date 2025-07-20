import express from "express"
const userRoutes = express.Router()
import UserController from "./user_controller.js"
import verifyToken from "../../middlwares/google_auth.js"
const userController = new UserController()

userRoutes.post("/login", verifyToken, (req, res, next) => {
    userController.login(req, res, next)
})

export default userRoutes
