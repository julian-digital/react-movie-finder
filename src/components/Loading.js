import React from "react";
// import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="spinner-wrapper">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loading;
