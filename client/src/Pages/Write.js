import React from "react";
import "./style.css";
import { useState } from "react";

export default function Write() {
  const [blogInputs, setBlogInputs] = useState({
    blogTitle: "",
    blogType: "",
    blogContent: "",
    image: null,
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogInputs((blogInputs) => ({
          ...blogInputs,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
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
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log(blogInputs);
              }}
            >
              <div className="mb-3">
                <label className="form-label">Enter the blog title : </label>
                <input
                  value={blogInputs.blogTitle}
                  onChange={(event) => {
                    setBlogInputs({
                      ...blogInputs,
                      blogTitle: event.target.value,
                    });
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Title ...."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter the blog type : </label>
                <input
                  value={blogInputs.blogType}
                  onChange={(event) => {
                    setBlogInputs({
                      ...blogInputs,
                      blogType: event.target.value,
                    });
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Type ...."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter your blog content :</label>
                <textarea
                  value={blogInputs.blogContent}
                  onChange={(event) => {
                    setBlogInputs({
                      ...blogInputs,
                      blogContent: event.target.value,
                    });
                  }}
                  type="textarea"
                  className="form-control"
                  placeholder="Blog content ...."
                  rows="6"
                ></textarea>
              </div>
              <div className="mb-3">
                {blogInputs.image && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={blogInputs.image}
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
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                )}
                {blogInputs.image == null && (
                  <>
                    <label htmlFor="formFile" className="form-label">
                      Upload one image for your blog
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={handleImageChange}
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
