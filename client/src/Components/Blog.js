import React from "react";
import "./ComponentsStyle.css";
import { Link } from "react-router-dom";

export default function Blog({ blog }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-3">
            <div className="d-flex justify-content-center align-items-center mt-3">
              {blog.photo && (
                <img
                  src={blog.photo}
                  className="img-size card-img-top"
                  alt={blog.title}
                />
              )}
            </div>
            <div className="card-body">
              <h2 className="card-title text-center">{blog.title}</h2>
              <h5 className="card-title text-center">Type : {blog.type}</h5>
              <Link to={`/?user=${blog.username}`} className="nav-link active">
                <div className="justify-content-center align-items-center text-center">
                  <button className="card-title text-center btn btn-outline-primary ">
                    Author : {blog.username}
                  </button>
                </div>
              </Link>
              <h6 className="card-title text-center text-muted">
                {new Date(blog.createdAt).toDateString()}
              </h6>
              <hr style={{ borderTop: "6px dotted teal" }} />
              <p className="card-text">{blog.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
