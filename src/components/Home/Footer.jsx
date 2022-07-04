import React from "react";
import "../../styles/Home/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer py-5 footerBg-dark" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12" data-aos="fade-down">
              <img
                src="./img/logoFooter.png"
                height="50px"
                width="150px"
                alt=""
              />

              <p className="text-foot mt-3 aboutTextFooter">
                Duport Midstream Company Limited (DMCL) is a leading energy
                company developing the first energy park in Nigeria.
              </p>
            </div>

            <div
              className="col-lg-2 col-md-3 mt-4 pt-2 mt-lg-0 pt-lg-0"
              data-aos="fade-down"
            >
              <h4 className="text-light text-uppercase footer-head">Company</h4>
              <ul className="list-unstyled footer-list mt-4 mb-0">
                <li>
                  <a href="/#" className="text-foot">
                    <i className="mdi mdi-chevron-right mr-2"></i>
                    Home
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/#" className="text-foot">
                    <i className="mdi mdi-chevron-right mr-2"></i> Aboutus
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/#" className="text-foot">
                    <i className="mdi mdi-chevron-right mr-2"></i> Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-2 col-md-3 mt-4 pt-2 mt-lg-0 pt-lg-0"
              data-aos="fade-down"
            >
              <h4 className="text-light text-uppercase footer-head">News</h4>
              <ul className="list-unstyled footer-list mt-4 mb-0">
                <li>
                  <a href="/#" className="text-foot">
                    <i className="mdi mdi-chevron-right mr-2"></i> Media and
                    News
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/#" className="text-foot">
                    <i className="mdi mdi-chevron-right mr-2"></i> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-down">
              <div className="side-block footer5side-block">
                <a href="/#" target="_blank" className="social-icon">
                  <img src="./img/instagram.png" alt="Instagram" />
                </a>
                <a href="/#" target="_blank" className="social-icon">
                  <img src="./img/linkedin.png" alt="Linkedin" />
                </a>
                <a href="/#" target="_blank" className="social-icon">
                  <img src="./img/twitter.png" alt="Twitter" />
                </a>
                <a href="/#" target="_blank" className="social-icon">
                  <img src="./img/youtube.png" alt="Youtube" />
                </a>
                <a href="/#" target="_blank" className="social-icon">
                  <img src="./img/mail.png" alt="Mail" />
                </a>

                <div className="socialAddr">
                  <p className="text-foot mt-3 ">
                    9 Fatai Durosinmi Etti crescent, <br /> off Ligali Ayorinde,
                    Victoria Island, Lagos. <br />
                    <span className="socialText">info@duportmidstream.com</span>
                    <br />
                    <span className="socialText"> +234 (0) 70 3778 6423 </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
