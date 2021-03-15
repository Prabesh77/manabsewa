import React from "react";

import "./Contact.css";
import Shape from "../Common/Shape";
import Button from "../Common/Button";

const ContactPage = () => {
  return (
    <div className="container">
      <Shape title="CONTACT US" />
      <div className="contact-page">
        <div className="contact-form">
          <form action="" className="contact-form">
            <div className="field">
              <label htmlFor="name">Full Name ( पुरा नाम )</label>
              <input type="text" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email ( ईमेल )</label>
              <input type="text" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message ( सन्देश )</label>
              <textarea type="text" id="message"></textarea>
            </div>
            <Button title="SEND" />
          </form>
        </div>
        <div className="other-info">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
          <div className="desc">
            <h4>Thoughts for Superb Living</h4>
            <p className="address">Kathmandu, Nepal</p>
            <p className="contact">Phone No: 01-5251262, 9851218262</p>
            <p className="email">Email: tfsl2066@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
