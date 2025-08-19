import userModel from "../Model/userModel.js";
import bcrpyt from "bcrypt";
import tokenGen from "../token/userToken.js";
import imageUpload from "../userImageUpload/userImage.js";
export const signup = async (req, res) => {
  try {
    const query = [];
    const phoneFind = req.body.phone?.trim();
    const emailFind = req.body.email?.trim();
    if (emailFind) {
      query.push({ email: new RegExp(`^${emailFind}$`, "i") });
    }
    if (phoneFind) {
      query.push({ phone: phoneFind });
    }
    if (query.length === 0) {
      return res.json({
        message: "Email or Phone must be Provided(Not Found)",
        status: 404,
        success: false,
        body: {},
      });
    }

    const userExists = await userModel.findOne({ $or: query });
    if (userExists) {
      return res.json({
        message: "user already Exists ( Duplicate Record)",
        status: 409,
        success: false,
        body: {},
      });
    } else {
      if (req.files?.image?.name) {
        req.body.image = imageUpload(req.files.image);
      }
      const encryptPassword = await bcrpyt.hash(req.body.password, 10);
      console.log(encryptPassword, "encrpypassword");
      console.log(req.body, "requested body");

      const user = await userModel.create({
        ...req.body,
        password: encryptPassword,
        image: req.body.image,
      });

      // -->Token start
      const tokenCall = tokenGen(user._id);
      user.token = tokenCall.createToken;
      user.logintime = tokenCall.verfiyToken.iat;
      user.save();
      //-->Token End
      return res.json({
        message: "user created Successfully",
        status: 201,
        success: true,
        body: user,
      });
    }
  } catch (error) {
    console.log(error, "Error in signup");
  }
};

export const login = async (req, res) => {
  const query = [];
  const emailFind = req.body.email?.trim();
  const phoneFind = req.body.phone?.trim();
  if (emailFind) {
    query.push({ email: new RegExp(`^${emailFind}$`) });
  }
  if (phoneFind) {
    query.push({ phone: phoneFind });
  }
  if (query.length === 0) {
    return res.json({
      message: "Email or Phone is required",
      status: 404,
      success: false,
      body: {},
    });
  }
  const userFind = await userModel.findOne({ $or: query });
  if (!userFind) {
    return res.json({
      message: "User not Found",
      status: 404,
      success: false,
      body: {},
    });
  } else {
    const decrpytPassword = await bcrpyt.compare(
      req.body.password,
      userFind.password
    );
    if (!decrpytPassword) {
      return res.json({
        message: "Wrong Password",
        success: false,
        status: 400,
      });
    } else {
      const tokenCall = tokenGen(userFind._id);
      userFind.token = tokenCall.createToken;
      userFind.logintime = tokenCall.verfiyToken.iat;
      userFind.save();
      return res.json({
        message: "User Logined Successfully",
        status: 200,
        success: true,
        body: userFind,
      });
    }
  }
};
export const findAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    return res.json({
      message: "All User Deatails",
      status: 200,
      success: true,
      body: allUsers,
    });
  } catch (error) {
    console.log(error, "Error in FindAll users");
  }
};

export const finduserByparams = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.idd);
    console.log(req.params, "req.parms");
    console.log(user, "user");
    if (user) {
      return res.json({
        message: "User Founded",
        success: true,
        status: 200,
        body: user,
      });
    } else {
      return res.json({
        message: "User not Founded",
        success: false,
        status: 404,
        body: {},
      });
    }
  } catch (error) {
    console.log(error, "error in finduserbyParams");
  }
};

export const finduserbyid = async (req, res) => {
  try {
    console.log("first");
    const userid = await userModel.findById(req.body.id);
    console.log(req.body, "req body");
    // console.log(userid,"userid")
    if (!userid) {
      return res.json({
        message: "User not Founded",
        success: false,
        status: 404,
        body: {},
      });
    } else {
      return res.json({
        message: "User founded",
        status: 200,
        success: true,
        body: userid,
      });
    }
  } catch (error) {}
};
export const finduserbyemail = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    console.log(user, "user");
    if (user) {
      return res.json({
        message: "User founded",
        status: 200,
        success: true,
        body: user,
      });
    } else {
      return res.json({
        message: "User not founded",
        status: 404,
        success: false,
        body: {},
      });
    }
  } catch (error) {
    console.log(error, "Error in finduserbyEmail");
  }
};

export const deleteuser = async (req, res) => {
  try {
    const user = await userModel.deleteOne({ id: req.params.idd });
    if (user) {
      return res.json({
        message: "User delete successfully",
        status: 200,
        success: true,
        body: user,
      });
    } else {
      return res.json({
        message: "User not found",
        status: 404,
        success: false,
        body: {},
      });
    }
  } catch (error) {
    console.log(error, "error in deleteuser");
  }
};

export const updateUserDetails = async (req, res) => {
  try {
    const userdetails = await userModel.findOne({ _id: req.params.iddd });
    console.log(userdetails, "userdetails");
    const encryptpassword = await bcrpyt.hash(userdetails.password, 10);
    console.log(encryptpassword, "encryptpassword");
    const user = await userModel.findByIdAndUpdate(
      req.params.iddd,
      { ...req.body, password: encryptpassword },
      {
        new: true,
      }
    );
    console.log(user, "user in updateUserDetails");
    return res.json({
      message: "User details upadted",
      status: 200,
      success: true,
      body: user,
    });
  } catch (error) {
    console.log(error, "error in updateuserDetails");
  }
};
