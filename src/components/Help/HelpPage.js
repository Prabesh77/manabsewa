import React from "react";
import Shape from "./../Common/Shape";

import "./HelpPage.css";

const HelpPage = () => {
  return (
    <div className="container">
      <Shape title="HELP US" />
      <div className="help-contents">
        <h2>सोझै सहयोग गर्नुहोस (Direct Help)</h2>
        <img src={process.env.PUBLIC_URL + "/images/direct-help.png"} alt="" />
        <h2>भोजन सेवा गर्नुहोस (Provide Foods)</h2>
        <img src={process.env.PUBLIC_URL + "/images/food-help.png"} alt="" />
      </div>
    </div>
  );
};

export default HelpPage;
