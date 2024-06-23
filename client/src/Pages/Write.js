import React, { useContext } from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = {
      username: user.username,
      title,
      type,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newBlog.photo = filename;
      try {
        await axios.post("/upload", data);
        (await axios.post("/blogs", newBlog)) && window.location.replace("/");
      } catch (err) {}
    }
    
  };

  return (
    <div style={{ backgroundColor: "cadetblue", minHeight: "100vh" }}>
      <div className="container text-center d-flex justify-content-center align-items-center">
        <h1 className="mt-5 mb-2 text-white">Write your blog here :</h1>
      </div>

      <div className=" p-5 container ">
        <div className="card mt-2 mb-5">
          <h5 className="card-header">Publish your blog</h5>
          <div className="card-body">
            <h5 className="card-title">Fill the form please !!</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Enter the blog title : </label>
                <input
                  autoFocus={true}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Title ...."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter the blog type : </label>
                <input
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Type ...."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter your blog content :</label>
                <textarea
                  onChange={(e) => setDesc(e.target.value)}
                  type="textarea"
                  className="form-control"
                  placeholder="Blog content ...."
                  rows="6"
                ></textarea>
              </div>
              <div className="mb-3">
                {file && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Blog"
                      style={{ width: "200px", height: "150px" }}
                    />
                    <div>
                      <label htmlFor="formFile" className="form-label">
                        change image :
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                )}
                {file == null && (
                  <>
                    <label htmlFor="formFile" className="form-label">
                      Upload one image for your blog
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </>
                )}
              </div>
              <div className="justify-content-center align-items-center text-center d-flex ">
                <button type="submit" className="btn btn-outline-primary">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
