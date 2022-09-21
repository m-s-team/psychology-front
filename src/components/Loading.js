import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div style={{height: "100vh"}}
         className="w-100 d-flex justify-content-center align-items-center flex-column"> <CircularProgress/> <p className="mt-3 ">در حال بارگذاری ...</p>
    </div>
  );
};

export default Loading;
