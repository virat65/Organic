import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    password: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: Number, default: 0 },
    image: { type: String, default: "" },
    token: { type: String, default: "" },
    logintime: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
const userModel = new mongoose.model("user", userSchema);
export default userModel;
