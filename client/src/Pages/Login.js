import React from "react";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
    remember: false,
  });
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 ">
      <div className="formStyle p-4 rounded bg-white">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(loginInputs);
          }}
        >
          <h3 className="text-center">Log In</h3>
          <hr style={{ borderTop: "6px dotted teal" }}></hr>
          <div className="mb-3">
            <label htmlFor="email">Enter your Email : </label>
            <input
              value={loginInputs.email}
              onChange={(event) => {
                setLoginInputs({ ...loginInputs, email: event.target.value });
              }}
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <p></p>
            <div className="mb-3">
              <label htmlFor="password">Enter your password : </label>
              <input
                value={loginInputs.password}
                onChange={(event) => {
                  setLoginInputs({
                    ...loginInputs,
                    password: event.target.value,
                  });
                }}
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                role="switch"
                id="check"
                checked={loginInputs.remember}
                onChange={(event) => {
                  setLoginInputs({
                    ...loginInputs,
                    remember: event.target.checked,
                  });
                }}
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-outline-primary">Log In</button>
          </div>
          <p className="justify-content-center align-items-center mt-2 text-center">
            You do not have account ?
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>{" "}
            now
          </p>
        </form>
      </div>
    </div>
  );
}
