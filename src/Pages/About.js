import React from "react";


export default function About() {
  return (
    <div style={{ backgroundColor: "cadetblue" }}>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card mt-5 " style={{ width: "50rem" }}>
          <div className="col-lg-7 card-img-top mt-2 ms-2 d-flex justify-content-center align-items-center">
            <img
              src="blog_2593510.png"
              className="img-fluid "
              alt="blog icon"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center align-items-center">
              About us
            </h5>
            <hr></hr>
            <p className="card-text">
              Welcome to our blog, your go-to source for insightful articles,
              expert advice, and thought-provoking discussions. Our team is
              passionate about sharing knowledge and inspiring our readers with
              a diverse range of topics, from lifestyle and wellness to
              technology and innovation. We strive to create a community where
              curiosity meets creativity, and every visit leaves you enriched
              and empowered. Join us on this journey of discovery, learning, and
              growth as we explore the world, one post at a time.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center text-center mt-5 p-4 mb-1">
        <h1>Our Team</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card justify-content-center align-items-center d-flex">
              <div className="col-lg-6  ">
                <img
                  src="CEO.PNG"
                  className="card-img-top rounded-circle mt-4"
                  alt="CEO"
                />
              </div>
              <div className="card-body">
                <h3>Mark David</h3>
                <h5 className="card-title">CEO</h5>
                <hr></hr>
                <p className="card-text">
                  Hello, I am Mark David, the CEO of Blog Platform. With over two
                  decades of experience in the industry, I am passionate about
                  driving innovation and fostering a culture of excellence. My
                  mission is to lead our dedicated team in creating impactful
                  solutions that not only meet but exceed our clients
                  expectations. I believe in the power of collaboration and am
                  committed to steering Blog Platform towards a future of
                  sustained growth and success. Thank you for being a part of
                  our journey.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card justify-content-center align-items-center d-flex">
              <div className="col-lg-6">
                <img
                  src="MarketingManager.jpg"
                  className="card-img-top rounded-circle mt-4"
                  alt="Marketing Manager"
                />
              </div>
              <div className="card-body">
                <h3>omar Ali</h3>
                <h5 className="card-title">Marketing Manager</h5>
                <hr></hr>
                <p className="card-text">
                  Hi, I am Omar Ali, the Marketing Manager at Blog Platform. With
                  a strong background in strategic marketing and a keen eye for
                  emerging trends, I am dedicated to crafting compelling
                  campaigns that resonate with our audience. My goal is to
                  amplify our brand's voice and drive engagement through
                  innovative and effective marketing strategies. I am excited to
                  connect with our community and contribute to the ongoing
                  success and growth of Blog Platform.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card justify-content-center align-items-center d-flex">
              <div className="col-lg-6">
                <img
                  src="OperationsManager.jpg"
                  className="card-img-top rounded-circle mt-4"
                  alt="Operations Manager"
                />
              </div>
              <div className="card-body">
                <h3>Iyad David</h3>
                <h5 className="card-title">Operations Manager</h5>
                <hr></hr>
                <p className="card-text">
                  Hello, I am Iyad David, the Operations Manager here at Blog
                  Platform. With a wealth of experience in optimizing processes
                  and enhancing efficiency, I am committed to ensuring seamless
                  operations that exceed our clients' expectations. My focus is
                  on fostering a culture of continuous improvement and teamwork,
                  driving us towards operational excellence. I am dedicated to
                  delivering top-notch service and ensuring smooth workflows
                  across all departments. Thank you for entrusting us with your
                  needs, and I look forward to serving you with excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
