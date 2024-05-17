import "./ComponentsStyle.css";
import Button from "./Button";

export default function Blog({
  name = "no name",
  blogType = "no Type",
  content = "no contant",
  children,
}) {
  return (
    <>
      <div className="blogStyle">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>
            {name},{blogType} blog
          </h1>
          <div style={{ display: "flex" }}>
            <Button title="Edit" />
            <Button title="delete" />
          </div>
        </div>
        <hr></hr>
        <p>{content}</p>
        <p>{children}</p>
      </div>
    </>
  );
}
