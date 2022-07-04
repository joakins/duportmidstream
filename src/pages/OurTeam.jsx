import React from "react";
import { Helmet } from "react-helmet";
import TeamHeader from "../components/OurTeam/TeamHeader";
import TeamSection1 from "../components/OurTeam/TeamSection1";
import TeamSection2 from "../components/OurTeam/TeamSection2";
import TeamSection3 from "../components/OurTeam/TeamSection3";
import TeamSection4 from "../components/OurTeam/TeamSection4";

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Duport Midstream Company Limited</title>
      </Helmet>
      <TeamHeader />
      <TeamSection1 />
      <TeamSection2 />
      <TeamSection3 />
      <TeamSection4 />
    </>
  );
};

export default OurTeam;
