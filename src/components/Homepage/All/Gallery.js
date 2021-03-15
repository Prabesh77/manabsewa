import React from "react";

import "./Gallery.css";
import Shape from "../../Common/Shape";
import Button from "../../Common/Button";

const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery">
        <Shape title="Our Gallery" />
        <div className="gallery-show">
          <div className="photos">
            <img src={process.env.PUBLIC_URL + "/images/a.jpg"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/b.jpg"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/c.jpg"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/d.jpg"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/e.jpg"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/f.jpg"} alt="" />
          </div>
        </div>
        <Button title="See More" />
      </div>
    </div>
  );
};

export default Gallery;
