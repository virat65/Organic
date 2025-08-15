import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="container ">
        <div className="login-form">
          <div className="row">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email OR Phone
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
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
                Login
              </button>{" "}
              <div className="signup-account  p-2 ">

                <a href="/signup" className="fs-5"> Don't Have Account ? SignUp</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
