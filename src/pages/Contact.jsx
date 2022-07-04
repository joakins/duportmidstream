import React from "react";
import { Helmet } from "react-helmet";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactSec1 from "../components/Contact/ContactSec1";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Duport Midstream Company Limited</title>
      </Helmet>
      <ContactHeader />
      <ContactSec1 />
    </>
  );
};

export default Contact;
