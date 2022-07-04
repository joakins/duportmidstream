import React from "react";
import { Helmet } from "react-helmet";
import HeaderHalf from "../components/About/HeaderHalf";
import AboutSection1 from "../components/About/AboutSection1";
import AboutSection2 from "../components/About/AboutSection2";
import AboutSection3 from "../components/About/AboutSection3";
import AboutSection4 from "../components/About/AboutSection4";
import AboutSection5 from "../components/About/AboutSection5";
import AboutSection6 from "../components/About/AboutSection6";
import Partners from "../components/Home/Partners";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Duport Midstream Company Limited</title>
      </Helmet>
      <HeaderHalf />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <Partners />
    </>
  );
};

export default About;
