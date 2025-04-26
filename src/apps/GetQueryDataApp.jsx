import React from "react";
import queryClient from "../react-query-client";

const GetQueryDataApp = () => {
  console.log("queryClient>>>", queryClient.getQueryData(["post", 1]));
  return <div>GetQueryDataApp</div>;
};

export default GetQueryDataApp;
