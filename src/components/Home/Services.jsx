import React from "react";
import "../../styles/Home/Services.css";

const Services = () => {
  return (
    <>
      <section class="pt-5 pb-5">
        <div class="container">
          <p class="homeSection2-SubHeading">What Makes Us Unique</p>
          <h2 class="text-center homeSection2-Haeding">
            Our Services: <br /> What We Provide
          </h2>

          <div class="row justify-content-center">
            <div
              class="col-lg-3 col-md-6 col-12 mt-4 pt-2 homeSection2-row"
              data-aos="flip-right"
            >
              <div class="homeSection2-Img">
                <img src="./img/aboutIcon1.png" class="img-fluid" alt="" />
              </div>

              <div>
                <h3 class="homeSection2-Title">
                  Energy Park Development services
                </h3>
                <p class="homeSection2-Paragraph">
                  We conceptualise, Deisgn, Develop, operate and manage energy
                  Parks.
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 col-12 mt-4 pt-2 homeSection2-row"
              data-aos="flip-right"
            >
              <div class="homeSection2-Img">
                <img src="./img/aboutIcon1.png" class="img-fluid " alt="" />
              </div>

              <div>
                <h3 class="homeSection2-Title">Condense and Crude Trading</h3>
                <p class="homeSection2-Paragraph">
                  We establish trading with international partners.
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 col-12 mt-4 pt-2 homeSection2-row"
              data-aos="flip-right"
            >
              <div class="homeSection2-Img">
                <img src="./img/aboutIcon1.png" class="img-fluid " alt="" />
              </div>

              <div>
                <h3 class="homeSection2-Title">Processing Fossil Fuels</h3>
                <p class="homeSection2-Paragraph">
                  We Process crude and gas in a net positive way.
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div
              class="col-lg-3 col-md-6 col-12 mt-4 pt-2 homeSection2-row"
              data-aos="flip-right"
            >
              <div class="homeSection2-Img">
                <img src="./img/aboutIcon1.png" class="img-fluid " alt="" />
              </div>

              <div>
                <h3 class="homeSection2-Title">Power Generation</h3>
                <p class="homeSection2-Paragraph">
                  Source agnostic power generation
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 col-12 mt-4 pt-2 homeSection2-row"
              data-aos="flip-right"
            >
              <div class="homeSection2-Img">
                <img src="./img/aboutIcon1.png" class="img-fluid " alt="" />
              </div>

              <div>
                <h3 class="homeSection2-Title">
                  Carbon Aggregation and Trading
                </h3>
                <p class="homeSection2-Paragraph">
                  We trade carbon credits inline with international standards.
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 col-12 mt-4 pt-2 homeSection2-row"
              data-aos="flip-right"
            >
              <div class="homeSection2-Img">
                <img src="./img/aboutIcon1.png" class="img-fluid " alt="" />
              </div>

              <div>
                <h3 class="homeSection2-Title">Smart Data Networks</h3>
                <p class="homeSection2-Paragraph">
                  We leveraging technology for connectivity, real time data and
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
