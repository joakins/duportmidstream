import React from "react";
import "../../styles/Error/Error404.css";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <section className="errorSec1 errorbg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="errorSec1-title">
                <h1 className="errorSec1Heading" data-aos="fade-up">
                  404
                </h1>
                <h2 className="errorSec1Heading">
                  WE ARE SORRY, PAGE NOT FOUND!
                </h2>
                <p>
                  THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS
                  NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
                </p>
                <NavLink to="/">back to homepage</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
