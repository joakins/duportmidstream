import React from "react";
import "../../styles/About/HeaderHalf.css";

const HeaderHalf = () => {
  return (
    <>
      <section className="bgHeroHalf ">
        <div class="bg-overlay">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="title-heading text-center mt-5 pt-4">
                      <h1 className="aboutHeaderTitle">About us</h1>
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

export default HeaderHalf;
