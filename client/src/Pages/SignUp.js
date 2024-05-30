import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SignUp() {
  const [signUpInputs, setSignUpInputs] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    remember: false
  });
  return (
    <div className="signup template d-flex justify-content-center align-items-center  vh-100 ">
      <div className="formStyle p-4 rounded bg-white">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(signUpInputs);
          }}
        >
          <h3 className="text-center">Sign Up</h3>
          <hr style={{ borderTop: "6px dotted teal" }}></hr>
          <div>
            <label htmlFor="lname">Enter your Name : </label>
            <input
              value={signUpInputs.username}
              onChange={(event) => {
                setSignUpInputs({
                  ...signUpInputs,
                  username: event.target.value,
                });
              }}
              type="text"
              placeholder="Enter your name"
              className="form-control"
              id="lname"
            />
          </div>
          <p></p>
          <div className="mb-3">
            <label htmlFor="email">Enter your Email : </label>
            <input
              value={signUpInputs.email}
              onChange={(event) => {
                setSignUpInputs({ ...signUpInputs, email: event.target.value });
              }}
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="email"
            />
            <p></p>
            <label>Select Gender :</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={signUpInputs.gender}
              onChange={(event) => {
                setSignUpInputs({
                  ...signUpInputs,
                  gender: event.target.value,
                });
              }}
            >
              <option >Male</option>
              <option >Female</option>
            </select>
            <p></p>
            <div className="mb-3">
              <label htmlFor="password">Enter your password : </label>
              <input
                value={signUpInputs.password}
                onChange={(event) => {
                  setSignUpInputs({
                    ...signUpInputs,
                    password: event.target.value,
                  });
                }}
                type="password"
                placeholder="Enter your password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                role="switch"
                id="check"
                checked={signUpInputs.remember}
                onChange={(event) => {
                  setSignUpInputs({
                    ...signUpInputs,
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
