import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Blogs from "../Components/Blogs";
import axios from "axios";
import { Context } from "../context/Context";

export default function Profile() {
  const { user, dispatch } = useContext(Context);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs", err);
      }
    };
    fetchBlogs();
  }, []);

  const userBlogs = blogs.filter((blog) => blog.username === user?.username);

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "LOGOUT" }); // Clear user context after deletion
      window.location.replace("/signup"); // Redirect to home page
    } catch (err) {
      console.error("Error deleting account", err);
    }
  };

  return (
    <div className="w-100 p-3">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card mt-5" style={{ width: "50rem" }}>
          <div className="col-lg-7 card-img-top mt-2 ms-2 d-flex justify-content-center align-items-center">
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
            <hr style={{ borderTop: "6px dotted teal" }} />
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Name : {user?.username}
            </h4>
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Email : {user?.email}
            </h4>
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Gender : {user?.gender}
            </h4>
            <p></p>
            <div className="d-grid">
              <button
                className="btn btn-outline-danger"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center text-center mt-5 p-4 mb-1 text-white">
        <h1>Your Blogs</h1>
      </div>
      <div className="w-100 p-3"></div>
      <Blogs blogs={userBlogs} showButtons={true} />
    </div>
  );
}
