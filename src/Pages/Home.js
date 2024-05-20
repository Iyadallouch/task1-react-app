import React from "react";
import "./style.css";
import Blog from "../Components/Blog";

export default function Home() {
  return (
    <div style={{ backgroundColor: "cadetblue", minHeight: "100vh" }}>
      <div className="image-container">
        <img src="HomeWall.jpg" alt="Home Wall" className="image" />
        <div className="image-text">
          <h2>Welcome to our Blog Website!</h2>
          <p>Here were you can discover a world of knowledge and inspiration</p>
        </div>
      </div>
      <Blog />
    </div>
  );
}
