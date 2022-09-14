import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="container">
    <label className="tab">Sign In</label>
    <div className="sign-in-htm">
          <div className="group">
            <label for="pass" className="label"> Email Address</label>
            <input id="pass" type="text" className="input" />
          </div>
          <div className="group">
            <label for="pass" className="label"> Password</label>
            <input
              id="pass"
              type="password"
              className="input"
              data-type="password"
            />
          </div>
          <div className="group_1">
            <input id="check" type="checkbox" className="check" checked />
            <label for="check"><span className="icon"></span> Keep me Signed in</label>
          </div>
          <div className="group">
            <input type="submit" className="button" value="Sign In" />
          </div>
          <div className="hr"></div>
		  <div className="foot-lnk foot_lnk1">
		    <a href="/Signup">Sign Up</a>
		  </div>
          <div className="foot-lnk">
            <a href="/Frgtpassword">Forgot Password?</a>
          </div>
        </div>
    </div>
  )
}

export default Login
