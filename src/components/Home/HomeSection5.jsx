import React from "react";
import "../../styles/Home/HomeSection5.css";

const HomeSection5 = () => {
  return (
    <>
      <section className="bg-home homeSection5" id="about">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mt-4 pt-2" data-aos="fade-right">
                  <img
                    src="./img/homeSectionImg2.png"
                    className="img-fluid d-block mx-auto homeSection5Img"
                    alt=""
                  />
                </div>

                <div className="col-md-6" data-aos="fade-left">
                  <p className="homeSection5Title">
                    TIPS AND STRATEGIES: INVESTING IN OIL AND GAS COMPANIES 2021{" "}
                  </p>
                  <p className="homeSection5Text">
                    Choosing the right company Investing in straight
                    participation, or workable interest partnership in new oil &
                    gas potential being made available by only the very best oil
                    & gas establishments, and merchants is now a prevalent way
                    to beat the stock market...
                  </p>

                  <div>
                    <button className="homeSection5-btn">
                      Read Article
                      <span>
                        <img src="./img/arrowRight.png" alt="" />
                      </span>
                    </button>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection5;
