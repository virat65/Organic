import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js";
const middleware = async (req, res, next) => {
  const usertoken = req.headers.authorization;
  if (!usertoken) {
    return res
      .status(401)
      .json({ message: "No token provided", success: false });
  }
  try {
    const tokenSplit = usertoken.split(" ")[1];
    console.log(tokenSplit, "tokenSplit");
    const tokenVerify = jwt.verify(tokenSplit, process.env.tokenCode);
    console.log(tokenVerify, "tokenVerify");
    const findUser = await userModel.findById(tokenVerify._id);
    console.log(findUser, "finduser");
    if (!findUser) {
      return res.status(404).json({
        message: "User not found. Please login again.",
        success: false,
        body: {},
      });
    }
    req.user = findUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};
export default middleware;
