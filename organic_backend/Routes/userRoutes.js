import express from "express"
import { signup } from "../Controller/userController.js"
const userRouter = express.Router()
userRouter.post("/signup",signup)
export default userRouter;