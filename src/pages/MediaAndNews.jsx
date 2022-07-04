import React from "react";
import { Helmet } from "react-helmet";
import MediaHeading from "../components/MediaAndNews/MediaHeading";
import MediaSec1 from "../components/MediaAndNews/MediaSec1";

const MediaAndNews = () => {
  return (
    <>
      <Helmet>
        <title>Media and News | Duport Midstream Company Limited</title>
      </Helmet>
      <MediaHeading />
      <MediaSec1 />
    </>
  );
};

export default MediaAndNews;
