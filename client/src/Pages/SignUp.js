import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

export default function SignUp() {
  const [signUpInputs, setSignUpInputs] = useState({
    username: "",
    email: "",
    gender: "Male",
    password: "",
  });
  const [error, setError] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/signup", signUpInputs);
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 ">
      <div className="formStyle p-4 rounded bg-white">
        <form onSubmit={handelSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <hr style={{ borderTop: "6px dotted teal" }}></hr>
          <div>
            <label htmlFor="lname">Enter your Name : </label>
            <input
              value={signUpInputs.username}
              onChange={(e) => {
                setSignUpInputs({
                  ...signUpInputs,
                  username: e.target.value,
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
              onChange={(e) => {
                setSignUpInputs({ ...signUpInputs, email: e.target.value });
              }}
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="email"
              autoFocus={true}
            />
            <p></p>
            <label>Select Gender :</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={signUpInputs.gender}
              onChange={(e) => {
                setSignUpInputs({
                  ...signUpInputs,
                  gender: e.target.value,
                });
              }}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <p></p>
            <div className="mb-3">
              <label htmlFor="password">Enter your password : </label>
              <input
                value={signUpInputs.password}
                onChange={(e) => {
                  setSignUpInputs({
                    ...signUpInputs,
                    password: e.target.value,
                  });
                }}
                type="password"
                placeholder="Enter your password"
                className="form-control"
                id="password"
              />
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-outline-primary" type="submit">
              sign Up
            </button>
            {error && (
              <span className="justify-content-center align-items-center mt-2 text-center text-danger">
                Signup went wrong!!!
              </span>
            )}
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
