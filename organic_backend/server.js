import express from "express";
import dotenv from "dotenv";
import dataBase from "./DataBase/DataBase.js";
import userRouter from "./Routes/userRoutes.js";
import fileUpload from "express-fileupload";
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
dataBase();

app.use("/api",userRouter)
app.use(fileUpload())
app.listen(port, () => {
  console.log(`server is running on the ${port}`);
});
