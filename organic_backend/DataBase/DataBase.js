import mongoose from "mongoose";
const dataBase = async () => {
  try {
     await mongoose.connect(process.env.mongoUrl);
    console.log(`DataBase connected`);
  } catch (error) {
    console.log(error, "error in dataBase");
  }
};

export default dataBase;
