import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const user = false;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "teal" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Blogging Platform
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user && (
              <li className="nav-item px-1   border border-white">
                <Link
                  to="/write"
                  className="nav-link active"
                  aria-current="page"
                >
                  Write
                </Link>
              </li>
            )}
          </ul>

          <form className="d-flex mx-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-light "
              type="submit"
              style={{ backgroundColor: "cadetblue", color: "white" }}
            >
              Search
            </button>
          </form>
          <p></p>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            {user && (
              <li className="nav-item px-1   border border-white ">
                <Link
                  to="/profile"
                  className="nav-link active "
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {!user && (
                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                >
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!user && (
                <Link to="/signup" className="nav-link">
                  SignUp
                </Link>
              )}
            </li>
            <li className="nav-item nav-link active">{user && "LogOut"}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
