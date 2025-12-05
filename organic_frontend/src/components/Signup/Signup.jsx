import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import backendurl from "../backendRoouting/backendRouting";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const handlChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e, "Event");
    console.log(userData, "userdata");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = await axios.post(backendurl.signup.url, userData);
      console.log(userDetails, "userDetails");
      if (userDetails.data.status === 200) {
        toast.success(userDetails.data.message);
        navigate("/login");
        console.log("first");
      } else {
        toast.error(userDetails.data.message);
      }
    } catch (error) {
      console.log(error, "Error in handlSubmit");
    }
  };
  return (
    <div className="container">
      <div className="signup-form">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={handlChange}
                name="name"
                value={userData.name}
                className="form-control"
                        id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail" className="form-label">
                Email OR Phone
              </label>
              <input
                type="email"
                onChange={handlChange}
                value={userData.email}
                name="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={handlChange}
                name="password"
                value={userData.password}
                className="form-control"
                id="exampleInputPassword"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPhoto" className="form-label my-2">
                Photo
              </label>
              <input
                type="file"
                name="image"
                // value={userData.image}
                onChange={handlChange}
                className="form-control"
                id="exampleInputPhoto"
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
              Signup
            </button>{" "}
            <div className="login-account  p-2 ">
              <a href="/login" className="fs-5">
                {" "}
                Already Have Account ? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
