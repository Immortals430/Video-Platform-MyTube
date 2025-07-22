import express from "express"
const userRoutes = express.Router()
import UserController from "./user_controller.js"
import verifyToken from "../../middlwares/google_auth.js"
const userController = new UserController()

userRoutes.post("/authenticate", verifyToken, (req, res, next) => {
    userController.authenticate(req, res, next)
})

userRoutes.get("/get-login-status/:token", (req, res, next) => {
    userController.getLoginStatus(req, res, next)
})
export default userRoutes
