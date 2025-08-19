import express from "express"
import { deleteuser, findAllUsers, finduserbyemail, finduserbyid, finduserByparams, login, signup, updateUserDetails } from "../Controller/userController.js"
import middleware from "../MiddleWare/middleWare.js"
const userRouter = express.Router()
userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/findAllUsers",middleware,findAllUsers)
userRouter.get("/finduserbyparams/:idd",finduserByparams)
userRouter.post("/finduserbyid",finduserbyid)
userRouter.post("/finduserbyemail",finduserbyemail)
userRouter.delete("/deleteUser/:idd",deleteuser)
userRouter.put("/updateUserDetails/:iddd",updateUserDetails)
export default userRouter;