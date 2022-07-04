import React from "react";
import "../../styles/Contact/ContactSec1.css";

const ContactSec1 = () => {
  return (
    <>
      <section className="bg-home contactSection1" id="about">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="myContainer ">
                <form action="action_page.php">
                  <div className="col-12 col-lg-12 pb-3 contact-input-feild">
                    <label for="fname">Full Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      className="form-control"
                      placeholder="Your name.."
                    />
                  </div>

                  <div className="col-12 col-lg-12 pb-3 contact-input-feild">
                    <label for="lname">Email Address</label>
                    <input
                      type="text"
                      id="lname"
                      name="lastname"
                      className="form-control"
                      placeholder="Your last name.."
                    />
                  </div>

                  <div className="col-12 col-lg-12 pb-3 contact-input-feild">
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Write something.."
                      height="200px"
                    />
                  </div>

                  <div className="col-12 col-lg-12 pb-3 contact-input-feild">
                    <input
                      class="submitBnt btn w-100 contactBtn"
                      type="submit"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>

              <div>
                <p className="textBetween" data-aos="fade-up">
                  <span>OR</span>
                </p>
              </div>

              <div className="side-block contactIcons" data-aos="fade-up">
                <a href="/" target="_blank" className="social-icon">
                  <img src="./img/dialerIcon.png" alt="Dialer" />
                </a>
                <a href="/" target="_blank" className="social-icon">
                  <img src="./img/email.png" alt="Email" />
                </a>
                <a href="/" target="_blank" className="social-icon">
                  <img src="./img/pointerIcon.png" alt="Pointer" />
                </a>
              </div>

              <div>
                <h4 className="contactAddressHeding" data-aos="fade-up">
                  Office Address
                </h4>
                <p className="contactAddressSubHeading" data-aos="fade-up">
                  9 Fatai Durosinmi Etti crescent, <br /> off Ligali, Ayorinde,
                  Victoria Island, Lagos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSec1;
