import React from "react";
import { Link } from "react-router-dom";
import dark from "../assets/img/intro/enact.JPG";
import rtl from "../assets/img/intro/Proflite.jpg";

const previewDemo = [
  {
    img: dark,
    title: "Caleb, the changemaker",
    routerPath: "/home-dark",
    delayAnimation: "100",
  },
  {
    img: rtl,
    title: "Caleb, the technophile",
    routerPath: "/home-dark",
    delayAnimation: "350",
  },
];

const Preview = () => {
  return (
    <div>
      <section className="banner text-center">
        <div className="content">
          <h1>Caleb Agyemang-Duah</h1>
          <h2>I love DX</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={val.img}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2 className="demo-title">{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      <footer>
        <div className="go_purchase">
          <h6 data-aos="fade-up" data-aos-duration="1200">
            The name behind Success
          </h6>
          <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            A journey of thousand miles begins with a step & I am poised with this journey. As a{" "}
            <span className="theme-color">Changemaker, public speaker</span> &amp;{" "}
            <span className="theme-color">data science technophile & website dev enthusiast, </span> let's "innovatively" get the job done.
          </h3>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <a
              className="button"
              href="https://www.linkedin.com/in/calebagyemangduah"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> Connect me</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
          </div>
        </div>
        {/* End go_purchase */}

        <div className="text-center footer_copyright">
          <h6>IQ blowing moments</h6>
          <h5>
            &copy; {new Date().getFullYear()} All Rights Reserved{" "}
            <span className="heart">&#10084;</span> by{" "}
            <a
              href="https://www.calebagyemangduah.com"
              target="_blank"
              rel="noreferrer"
            >
              Agyemang-Duah Caleb.
            </a>{" "}
          </h5>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
};

export default Preview;
