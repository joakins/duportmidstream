import React from "react";
import "../../styles/Home/AboutInBrief.css";

const AboutInBrief = () => {
  return (
    <>
      <section className="bg-home thirdSection" id="about">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mt-4 pt-2" data-aos="fade-right">
                  <img
                    src="./img/sectionImg1.png"
                    class="img-fluid d-block mx-auto thirdSectionImg"
                    alt=""
                  />
                </div>

                <div className="col-md-6" data-aos="fade-left">
                  <p className="thirdSectionTitle"> Building a better world </p>
                  <p className="thirdSectionText">
                    Duport midstream company limited is a source-agonistic
                    energy provider commited to ensuring sustainable and impact
                    accretive energy production delivery & consumption in
                    Africa. Out commitment is ensuring our activities benefits
                    the local community, the environment and economic
                    staeholders equitably
                  </p>

                  <div>
                    <button className="thirdSection-btn">
                      See how we change the world
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

export default AboutInBrief;
