import userModel from "../Model/userModel.js";
export const signup = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
 console.log(req.body,"requested body")
  console.log(user,"userInfo")
  return res.json({
    message: "user created Successfully",
    status: 200,
    success: true,
    body: user,
  });
  } catch (error) {
console.log(error,"Error in signup")
  }

};
