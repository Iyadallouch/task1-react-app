import React, { useContext, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { LoginFailure, LoginSuccess, loginStart } from "../context/Actions";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(LoginSuccess(res.data));
    } catch (err) {
      dispatch(LoginFailure());
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 ">
      <div className="formStyle p-4 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Log In</h3>
          <hr style={{ borderTop: "6px dotted teal" }}></hr>
          <div className="mb-3">
            <label htmlFor="email">Enter your Email : </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <p></p>
            <div className="mb-3">
              <label htmlFor="password">Enter your password : </label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
            </div>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={isFetching}
            >
              Log In
            </button>
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
