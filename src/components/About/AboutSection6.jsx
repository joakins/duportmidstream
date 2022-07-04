import React from "react";
import "../../styles/About/AboutSection6.css";

const AboutSection6 = () => {
  return (
    <>
      <section className="aboutSection6 bgAboutSection6" id="beats">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="aboutSection6-title">
                <h1 className="aboutSec6Heading" data-aos="fade-up">
                  We are the Change Makers Our award <br /> winning Smart energy
                  park <br />
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 mt-4 pt-2">
              <div
                className="aboutFeature aboutSec6-rounded bg-white"
                data-aos="flip-left"
              >
                <img
                  src="./img/advantage1.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <div className="content pt-4 pb-4 p-3">
                  <h5 className="aboutSec6-Title">SCALABLE AND MODULAR</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 mt-4 pt-2">
              <div
                className="aboutFeature aboutSec6-rounded bg-white"
                data-aos="flip-left"
              >
                <img
                  src="./img/advantage2.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <div className="content pt-4 pb-4 p-3">
                  <h5 className="aboutSec6-Title">ENVIRONMENTALLY FRIENDLY.</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 mt-4 pt-2">
              <div
                className="aboutFeature aboutSec6-rounded bg-white"
                data-aos="flip-left"
              >
                <img
                  src="./img/advantage3.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <div className="content pt-4 pb-4 p-3">
                  <h5 className="aboutSec6-Title">
                    IMPROVE LOCAL CONTENT PARTICIPATION
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 mt-4 pt-2">
              <div
                className="aboutFeature aboutSec6-rounded bg-white"
                data-aos="flip-left"
              >
                <img
                  src="./img/advantage4.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <div className="content pt-4 pb-4 p-3">
                  <h5 class="aboutSec6-Title">
                    STEADY SUPPLY OF REFINED PETROLEUM PRODUCTS
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection6;
