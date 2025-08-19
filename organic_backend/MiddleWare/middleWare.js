import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js";
const middleware = async (req, res, next) => {
  const usertoken = req.headers.authorization;
  console.log(usertoken, "usertoken");

  const tokenSplit = usertoken.split(" ")[1];
  console.log(tokenSplit, "tokenSplit");
  const tokenVefiyuser = jwt.verify(tokenSplit, process.env.tokenCode);
  console.log(tokenVefiyuser, "tokenVerifyuser in middleware");
  const findUser = await userModel.findById(tokenVefiyuser._id);
  console.log(findUser, "finduser");
  if (findUser.token != tokenSplit) {
    return res.json({
      message: "Please Login Again",
      success: false,
      status: 404,
      body: {},
    });
  } else {
    req.user = findUser;
    next();
  }
};
export default middleware;
