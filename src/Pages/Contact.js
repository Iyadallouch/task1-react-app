import React from "react";

export default function Contact() {
  return (
    <div
      style={{
        backgroundColor: "cadetblue",
        minHeight: "100vh"
      }}
    >
      <div className="container text-center d-flex justify-content-center align-items-center ">
        <div className="row row-cols-1">
          <div className="col my-5 text-white">
            <h1>Feel free to contact us</h1>
          </div>

          <div className="col">
            <div className=" text-center d-flex justify-content-center align-items-center">
              <div className="card mb-3 my-5" style={{ maxWidth: "900px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="Contact-Page.jpg"
                      className="img-fluid rounded-start "
                      alt="Contact Page"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title my-4">contact us</h3>
                      <p className="card-text">Email : Blog@gmail.com</p>
                      <p className="card-text">Phone Number : 0501111111</p>
                      <p className="card-text">Address : Abudhabi,UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
