import React from "react";
import Button from "../Common/Button";

const AdminLogin = () => {
  return (
    <>
      <div className="admin-header" style={adminHeader}>
        <h3>Welcome to Admin Login</h3>
      </div>
      <div className="contact-form">
        <h4>Admin Login</h4>
        <form action="" className="contact-form">
          <div className="field">
            <label htmlFor="email">Email ( ईमेल )</label>
            <input type="text" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Password</label>
            <input type="password" id="password" />
          </div>
          <Button title="LOGIN" />
        </form>
      </div>
    </>
  );
};

const adminHeader = {
  height: "150px",
  textAlign: "center",
  background: "var(--main-blue)",
  color: "#fff"
};

export default AdminLogin;
