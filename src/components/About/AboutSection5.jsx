import React from "react";
import "../../styles/About/AboutSection5.css";

const AboutSection5 = () => {
  return (
    <>
      <section className="pt-5 pb-5" id="services">
        <div className="container">
          <h2 className="text-center aboutSection5Heading" data-aos="fade-up">
            Our award winning Duport Energy park in <br /> Egbokor, Edo state
          </h2>
          <p className="aboutSection5Text" data-aos="fade-up">
            An example of our belief and conviction is our first energy park in
            Edo state, that we developed to unlock Africa’s Trapped natural
            resources whilst reducing our carbon footprint. This energy park is
            the first of it’s kind in the world.
          </p>

          <div className="row" data-aos="fade-right">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="aboutSection5Icons">
                <img
                  src="./img/awardIcon.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>
              <div className="aboutSection5Icons">
                <img
                  src="./img/newsTitle.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>

              <div>
                <h3 className="aboutSection5Sub-Heading">
                  Oil and Gas CEO OF <br /> The Year Midstream
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="aboutSection5Icons">
                <img
                  src="./img/awardIcon.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>
              <div className="aboutSection5Icons">
                <img
                  src="./img/newsTitle.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>

              <div>
                <h3 className="aboutSection5Sub-Heading">
                  Oil & Gas Technology & Innovation <br /> Company of the Year
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="aboutSection5Icons">
                <img
                  src="./img/awardIcon.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>
              <div className="aboutSection5Icons">
                <img
                  src="./img/newsTitle.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>

              <div>
                <h3 className="aboutSection5Sub-Heading">
                  Midstream company <br /> of the Year
                </h3>
              </div>
            </div>
          </div>

          <hr className="aboutSection5Rule" height="20" width="250" />

          <div>
            <p className="text-center aboutSection5Text" data-aos="fade-up">
              As featured in the news by
            </p>
          </div>

          <div
            className="side-block aboutSection5side-block"
            data-aos="fade-up"
          >
            <img src="./img/theGuardian.png" alt="The Guardian" />
            <img src="./img/THISDAY.png" alt="Thisday" />
            <img src="./img/newsTitle.png" alt="News Title" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection5;
