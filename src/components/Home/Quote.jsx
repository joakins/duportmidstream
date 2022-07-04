import React from "react";
import "../../styles/Home/Quote.css";

const Quote = () => {
  return (
    <>
      <section className="pt-5 pb-5 quoteBg" id="reviews">
        <div className="container">
          <img src="./img/iconSection.png" class="testimonialIcon" alt="" />

          <h2 className="text-center heading" data-aos="fade-up">
            <span id="testimonialHeader2">
              Energy is a cornerstone of the mordern industrial economy and
              everyday life in general, Thus energy is a powerful tool for
              economic & social development.
            </span>
          </h2>
          <hr className="testimonialRule" height="20" width="250" />

          <p className="text-center testimonialText" data-aos="fade-up">
            Dr. Akintoye Akindele, CFA - CEO, Duport Midstream
          </p>
        </div>
      </section>
    </>
  );
};

export default Quote;
