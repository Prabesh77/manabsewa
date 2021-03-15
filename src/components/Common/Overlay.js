import React from "react";

const Overlay = () => {
  return <div className="overlay" style={overlay}></div>;
};

const overlay = {
  position: "absolute",
  zIndex: "200",
  minHeight: "100%",
  width: "100%",
  top: "80px",
  right: "0",
  bottom: "0",
  background: "rgba(0, 0, 0, .5)"
};

export default Overlay;
