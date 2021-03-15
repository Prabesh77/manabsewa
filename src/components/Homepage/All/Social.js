import React from "react";
import Shape from "../../Common/Shape";

import "./Social.css";

const Social = () => {
  return (
    <div className="social-sec">
      <div className="social-section fb">
        <Shape title="Our Facebook" />
        <div className="facebook">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freallifela%2F%20&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            style={{ border: "none", overflow: "hidden" }}
            className="facebook-page"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"></iframe>
        </div>
      </div>
      <div className="social-section payment">
        <Shape title="Donation Gateway" />
        <img src={process.env.PUBLIC_URL + "/images/payment.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Social;
