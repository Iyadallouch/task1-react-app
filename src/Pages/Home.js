import React from "react";
import "./style.css";
import Blog from "../Components/Blog";

export default function Home() {
  return (
    <div>
      <div className="image-container">
        <img src="HomeWall.jpg" alt="Home Wall" className="image" />
        <div className="image-text">
          <h2>Welcome to our Blog Website!</h2>
          <p>Here were you can discover a world of knowledge and inspiration</p>
        </div>
      </div>
      <Blog />
      <div className="justify-content-center align-items-center d-flex">
        <nav aria-label="Page navigation example ">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="/">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
