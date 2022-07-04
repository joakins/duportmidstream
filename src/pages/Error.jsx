import React from "react";
import { Helmet } from "react-helmet";
import Error404 from "../components/Error/Error404";

export const Error = () => {
  return (
    <>
      <Helmet>
        <title>Error | Duport Midstream Company Limited</title>
      </Helmet>
      <Error404 />
    </>
  );
};
export default Error;
