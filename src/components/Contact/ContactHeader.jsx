import React from "react";
import "../../styles/Contact/ContactHeader.css";

const ContactHeader = () => {
  return (
    <>
      <section className="bgHeroHalf" id="home">
        <div className="bg-overlay">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="title-heading text-center mt-5 pt-4">
                      <h1 className="contactTitle">Contact Us</h1>
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

export default ContactHeader;
