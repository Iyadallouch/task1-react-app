import React from "react";
import "./style.css";
import { useState } from "react";

export default function Write() {
  const [titleInput, setTitle] = useState("");
  const [typeInput, setType] = useState("");
  const [textInput, setText] = useState("");

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
            <form>
              <div className="mb-3">
                <label className="form-label">Enter the blog title : </label>
                <input
                  value={titleInput}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Title ...."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter the blog type : </label>
                <input
                  value={typeInput}
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Type ...."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter your blog content :</label>
                <textarea
                  value={textInput}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                  type="textarea"
                  className="form-control"
                  placeholder="Blog content ...."
                  rows="6"
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="formFile" class="form-label">
                  Upload one image for your blog
                </label>
                <input className="form-control" type="file" id="formFile" />
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
