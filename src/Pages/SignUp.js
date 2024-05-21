import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SignUp() {
  const [username, setUserName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  return (
    <div className="signup template d-flex justify-content-center align-items-center  vh-100 ">
      <div className="formStyle p-4 rounded bg-white">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h3 className="text-center">Sign Up</h3>
          <hr style={{ borderTop: "6px dotted teal" }}></hr>
          <div>
            <label htmlFor="lname">Enter your Name : </label>
            <input
              value={username}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              type="text"
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          <p></p>
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
            <label>Select Gender :</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Gender ..</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
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
            <button className="btn btn-outline-primary">sign Up</button>
          </div>
          <p className="justify-content-center align-items-center mt-2 text-center">
            Already have account
            <Link to="/login" className="ms-2">
              Login
            </Link>{" "}
            now
          </p>
        </form>
      </div>
    </div>
  );
}
