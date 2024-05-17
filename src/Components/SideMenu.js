import "./ComponentsStyle.css";
import Button from "./Button";

export default function SideMenu({ PersonName }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="sideMenuStyle">
        <img
          style={{ width: "100px" }}
          alt="This is an account pic"
          src="account.png"
        ></img>
        <h2>{PersonName}</h2>
        <hr></hr>
        <h5>Author discription : </h5>
        <p>
          As an avid explorer of words and ideas, I find joy in crafting
          narratives that captivate and inspire. With a passion for learning and
          a curiosity that knows no bounds, I strive to uncover the beauty and
          complexity of the world through the power of language.
        </p>
        <Button title="Edit profile" />
      </div>
      <div style={{ marginRight: "right" }}>
        <Button title="Log Out" />
      </div>
    </div>
  );
}
