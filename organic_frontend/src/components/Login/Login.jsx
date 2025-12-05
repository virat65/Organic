import React from "react";
import backendurl from "../backendRoouting/backendRouting.js";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "./Login.css";
import cookies from "js-cookie";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  // const user = await axios.post(backendurl.login.url,userData)
  const handleChange = (e) => {
    console.log(e.target, "event target");
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = await axios.post(backendurl.login.url, userData);
      console.log(userDetails, "userDetails");
      if (userDetails.data.status === 200) {
        toast.success(userDetails.data.message);
        console.log(userDetails.data.body, "userDetails.data.body");
        cookies.set("userInfo", JSON.stringify(userDetails.data.body));
        navigate("/");
        window.location.reload()
        console.log(userDetails.data.message);
        console.log("sucess");
      } else {
        toast.error(userDetails.data.message);
        console.log(userDetails.data.message);
        console.log("Error");
      }
    } catch (error) {
      console.log(error, "Error in handlSubmit");
    }
  };
  return (
    <>
      <div className="container ">
        <div className="login-form">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email OR Phone
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  value={userData.email}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={userData.password}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 fs-5">
                Login
              </button>{" "}
              <div className="signup-account  p-2 ">
                <a href="/signup" className="fs-5">
                  {" "}
                  Don't Have Account ? SignUp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
