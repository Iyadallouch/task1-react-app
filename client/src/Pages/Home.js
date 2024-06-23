import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Blogs from "../Components/Blogs";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/blogs" + search);
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs", err);
      }
    };
    fetchBlogs();
  }, [search]);

  return (
    <div className="w-100 p-3">
      <div className="image-container">
        <img src="HomeWall.jpg" alt="Home Wall" className="image" />
        <div className="image-text">
          <h2>Welcome to our Blog Website!</h2>
          <p>Here you can discover a world of knowledge and inspiration</p>
        </div>
      </div>
      <Blogs blogs={blogs} />
    </div>
  );
}
