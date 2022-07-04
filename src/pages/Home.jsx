import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";
import Directors from "../components/Home/Directors";
import Services from "../components/Home/Services";
import HomeMidBanner2 from "../components/Home/HomeMidBanner2";
import AboutInBrief from "../components/Home/AboutInBrief";
import Quote from "../components/Home/Quote";
import HomeSection5 from "../components/Home/HomeSection5";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Duport Midstream Company Limited</title>
      </Helmet>
      <Header />
      <Partners />
      <Directors />
      <Services />
      <HomeMidBanner2 />
      <AboutInBrief />
      <Quote />
      <HomeSection5 />
    </>
  );
};

export default Home;
