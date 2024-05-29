import React from "react";
import "./style.css";
import Blog from "../Components/Blog";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card mt-5 " style={{ width: "50rem" }}>
          <div className="col-lg-7 card-img-top mt-2 ms-2 d-flex justify-content-center align-items-center ">
            <img
              src="account.png"
              className="img-fluid image-account-size"
              alt="account icon"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title d-flex justify-content-center align-items-center">
              Account information
            </h2>
            <hr style={{ borderTop: "6px dotted teal" }}></hr>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Name : Iyad Allouch
            </h4>
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Email : Iyad@gmail.com
            </h4>
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Gender : Male
            </h4>
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              password : ********
            </h4>
            <p></p>
            <div className="d-grid">
              <button className="btn btn-outline-primary">Edit profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center text-center mt-5 p-4 mb-1 text-white">
        <h1>Your Blogs</h1>
      </div>

      <Blog>
        <div className="justify-content-center align-items-center text-center d-flex ">
          <Link to={`/write?edit=2`}>
          <button
            type="button"
            className="btn btn-outline-primary mx-5 "
            value="Edit"
          >
            Edit
          </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-primary mx-5 "
            value="Delete"
          >
            Delete
          </button>
        </div>
      </Blog>
    </div>
  );
}
