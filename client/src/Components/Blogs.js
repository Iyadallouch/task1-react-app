import Blog from "./Blog";
import React from "react";

export default function Blogs({ blogs , showButtons}) {
  return (
    <div className="row row-cols-1 row-cols-md-2">
      {blogs.map((b, index) => (
        <div className="col mb-3" key={index}>
          <Blog blog={b} key={b.id} showButtons={showButtons}/>
        </div>
      ))}
    </div>
  );
}
