import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Blogs from "../Components/Blogs";
import axios from "axios";
import { Context } from "../context/Context";
// import Blog from "../Components/Blog";
// import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(Context); // Assume user is available in context
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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

  // Filter blogs to include only those published by the current user
  const userBlogs = blogs.filter((blog) => blog.username === user.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      gender,
      password,
      
    };try{
      await axios.put("/users" + user._id , updatedUser)
      window.location.replace("/profile")

    }catch(err){

    }
  };

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
            {isEditing ? (
              <div className="d-flex">
              <h4>Name:</h4>
                <input
                  type="text"
                  value={username}
                  className="form-control text-center"
                  onChange={(e) => setUsername(e.target.value)}
                />
                </div>
              ) : (
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Name : {user.username}
            </h4>
            )}
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Email : {user.email}
            </h4>
            <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              Gender : {user.gender}
            </h4>
            {/* <p></p>
            <h4 className="card-text card-title d-flex justify-content-center align-items-center">
              password : ********
            </h4> */}
            <p></p>
            <div className="d-grid">
              <button className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>
                Update profile
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

      {/* <Blog>
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
      </Blog> */}
    </div>
  );
}
