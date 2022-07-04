import React from "react";
import { Helmet } from "react-helmet";
import MediaDetailsHeading from "../components/MediaAndNews/MediaDetailsHeading";
import MediaNewsSingle from "../components/MediaAndNews/MediaNewsSingle";

const MediaNewsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Media and News Details | Duport Midstream Company Limited</title>
      </Helmet>
      <MediaDetailsHeading />
      <MediaNewsSingle />
    </>
  );
};

export default MediaNewsDetails;
