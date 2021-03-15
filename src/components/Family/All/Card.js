import React from "react";

import "./Card.css";
import Shape from "../../Common/Shape";

const Card = ({ image, name, level }) => {
  return (
    <div className="member-card">
      <div className="img-holder">
        <img src={image} alt="" />
      </div>
      <div className="member-detail">
        <p>{name}</p>
        <p className="level">{level}</p>
      </div>
    </div>
  );
};

export default Card;
