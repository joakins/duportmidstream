import React from "react";
import "../../styles/OurTeam/TeamHeader.css";

const TeamHeader = () => {
  return (
    <>
      <section className="teamHeaderHalf " id="home">
        <div class="bg-overlay">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="title-heading text-center mt-5 pt-4">
                      <h1 className="aboutHeaderTitle">Our Team</h1>
                      <p className="aboutHeaderText">
                        Duport Midstream Company Limited.
                      </p>
                    </div>
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

export default TeamHeader;
