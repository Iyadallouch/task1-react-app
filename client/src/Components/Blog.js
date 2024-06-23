import "./ComponentsStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Blog({ blog, showButtons }) {
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState(blog.title);
  const [type, setType] = useState(blog.type);
  const [desc, setDesc] = useState(blog.desc);
  const [isEditing, setIsEditing] = useState(false);
  const [originalTitle, setOriginalTitle] = useState(blog.title);
  const [originalType, setOriginalType] = useState(blog.type);
  const [originalDesc, setOriginalDesc] = useState(blog.desc);

  const handleSave = async () => {
    try {
      const updatedBlog = {
        ...blog,
        title,
        type,
        desc,
      };
      await axios.put(`/blogs/${blog._id}`, updatedBlog);
      setIsEditing(false); // Exit edit mode after saving
      window.location.replace("/profile");
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  const toggleEditMode = () => {
    setIsEditing((prevEditing) => {
      if (prevEditing) {
        // Revert changes if canceling
        setTitle(originalTitle);
        setType(originalType);
        setDesc(originalDesc);
      } else {
        // Save original values if starting to edit
        setOriginalTitle(title);
        setOriginalType(type);
        setOriginalDesc(desc);
      }
      return !prevEditing;
    });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/blogs/${blog._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/profile");
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-3">
            <div className="d-flex justify-content-center align-items-center mt-3">
              {blog.photo && (
                <img
                  src={PF + blog.photo}
                  className="img-size card-img-top"
                  alt={blog.title}
                />
              )}
            </div>
            <div className="card-body">
              {isEditing ? (
                <input
                  type="text"
                  value={title}
                  className="form-control text-center"
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <h2 className="card-title text-center">{blog.title}</h2>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={type}
                  className="form-control my-3 text-center"
                  onChange={(e) => setType(e.target.value)}
                />
              ) : (
                <h5 className="card-title text-center">Type : {blog.type}</h5>
              )}
              {!showButtons && (
                <Link
                  to={`/?user=${blog.username}`}
                  className="nav-link active"
                >
                  <div className="justify-content-center align-items-center text-center">
                    <button className="card-title text-center btn btn-outline-primary ">
                      Author : {blog.username}
                    </button>
                  </div>
                </Link>
              )}
              <h6 className="card-title text-center text-muted">
                {new Date(blog.createdAt).toDateString()}
              </h6>
              <hr style={{ borderTop: "6px dotted teal" }} />
              {isEditing ? (
                <textarea
                  type="text"
                  value={desc}
                  className="form-control"
                  rows="6"
                  onChange={(e) => setDesc(e.target.value)}
                />
              ) : (
                <p className="card-text">{blog.desc}</p>
              )}
              {showButtons && (
                <div className="d-flex justify-content-around mt-3">
                  <button
                    className={`btn ${
                      isEditing ? "btn-outline-success" : "btn-outline-primary"
                    }`}
                    onClick={isEditing ? handleSave : toggleEditMode}
                  >
                    {isEditing ? "Save" : "Edit"}
                  </button>
                  {isEditing && (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={toggleEditMode}
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
