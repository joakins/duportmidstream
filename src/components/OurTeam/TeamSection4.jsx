import React from "react";
import "../../styles/OurTeam/TeamSection4.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const TeamSection4 = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <section className="section-partner bg-light" id="partners">
        <div className="container">
          <h2 className="text-center partnersHeader">Our Technical Partners</h2>
          <div className="row">
            <div className="col-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={6}
                autoplay={{ delay: 3000 }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="./img/partner1.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner2.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner3.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner4.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner5.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner6.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner7.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner8.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner9.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner10.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner11.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner12.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner13.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner14.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner15.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner16.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./img/partner17.png"
                    className="mx-auto d-block partnerLogos"
                    alt="partners"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection4;
