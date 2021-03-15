import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-details">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
          <div className="desc">
            <h3>Contact Information:</h3>
            <h4>Thoughts for Superb Living</h4>
            <p className="address">Kathmandu, Nepal</p>
            <p className="contact">Phone No: 01-5251262, 9851218262</p>
            <p className="email">Email: tfsl2066@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="developer">
        <p>
          Developed and Maintained by <a href="">Prabesh Regmi</a>
        </p>
        <p>&copy;2020@prabesh.regmi</p>
      </div>
    </div>
  );
};

export default Footer;
