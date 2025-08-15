import React from "react";
import "./Signup.css"
const Signup = () => {
  return (
    <div className="container">
      <div className="signup-form">
        <div className="row">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">
                Email OR Phone
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword"
              />
              <div class="mb-3">
                <label for="exampleInputPhoto" class="form-label my-2">
                  Photo
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleInputPhoto"
                />
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary w-100 fs-5">
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
