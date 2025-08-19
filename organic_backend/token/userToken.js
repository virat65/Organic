import jwt from "jsonwebtoken";
const tokenGen = (userid) => {
  try {
    const createToken = jwt.sign({ _id: userid }, process.env.tokenCode);
    console.log(createToken, "createToken in tokenGen");
    const verfiyToken = jwt.verify(createToken, process.env.tokenCode);
    console.log(verfiyToken, "verfiyToken in tokenGen");
    return { createToken, verfiyToken };
  } catch (error) {
    console.log(error, "Error in TokenGen");
  }
};
export default tokenGen