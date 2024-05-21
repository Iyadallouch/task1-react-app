import React from "react";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 ">
      <div className="formStyle p-4 rounded bg-white">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h3 className="text-center">Log In</h3>
          <hr style={{ borderTop: "6px dotted teal" }}></hr>
          <div className="mb-3">
            <label htmlFor="email">Enter your Email : </label>
            <input
              value={emailInput}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <p></p>
            <div className="mb-3">
              <label htmlFor="password">Enter your password : </label>
              <input
                value={passwordInput}
                onChange={(event) => {
                  setPassword(event.target.value);
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
