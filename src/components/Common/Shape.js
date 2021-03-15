import React from "react";

const Shape = ({ title }) => {
  return (
    <div className="container">
      <div style={shapeStyle} className="shape">
        <p className="title" style={titleStyle}>
          {title}
        </p>
      </div>
    </div>
  );
};

const shapeStyle = {
  height: "150px",
  maxWidth: "270px",
  background: "var(--main-blue)",
  clipPath: " polygon(0 33%, 100% 33%, 85% 63%, 0 63%)",
  position: "relative"
};

const titleStyle = {
  color: "var(--light-white)",
  position: "absolute",
  top: "36%",
  padding: "0 1rem",
  fontSize: "1.5rem"
};

// polygon(0 75%, 100% 75%, 79% 100%, 0% 100%)

export default Shape;
