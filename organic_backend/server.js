import express from "express";
import dotenv from "dotenv";
import dataBase from "./DataBase/DataBase.js";
import userRouter from "./Routes/userRoutes.js";
import fileUpload from "express-fileupload";
import cors from "cors"
const app = express();
dotenv.config();
const port = process.env.PORT;
dataBase();
app.use(express.json());
app.use(fileUpload())
// app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api",userRouter)
app.listen(port, () => {
  console.log(`server is running on the ${port}`);
});
