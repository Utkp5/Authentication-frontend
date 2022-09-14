import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="container">
      <label className="tab">Sign Up</label>
      <div className="login-form">
        <div className="sign-up-htm">
          <div className="group">
            <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input" />
          </div>
          <div className="group">
            <label for="pass" className="label">Password</label>
            <input
              id="pass"
              type="password"
              className="input"
              data-type="password"
            />
          </div>
          <div className="group">
            <label for="pass" className="label">Repeat Password</label>
            <input
              id="pass"
              type="password"
              className="input"
              data-type="password"
            />
          </div>
          <div className="group">
            <label for="pass" className="label">Email Address</label>
            <input id="pass" type="text" className="input" />
          </div>
          <div className="group">
            <input type="submit" className="button" value="Sign Up" />
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
            <a href="/Login">Already Member? Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
