import React, { useState } from "react";
import "./Login.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";



function Login() {


  const [userEmail,setuserEmail]= useState();
  const [password,setpassword]= useState();


const Handlesubmit = async () => {
  const user = {
    userEmail,
    password,
  };
  await axios.post("http://localhost:5000/api/Login",user).then(function (response) {
    
    console.log(response.data.userid);
      if (response.data.token) {
        localStorage.setItem("token",response.data.token);
        Notify.success('Login Successfully')
        localStorage.setItem("userid",response.data.userid);
        window.location.href = "/Surprisepage";
      }

    }).catch(function (error) {
      Notify.failure('Invalid Credentials!');      
    });
  }






  return (
    <div className="container">
    <label className="tab">Sign In</label>
    <div className="sign-in-htm">
          <div className="group">
            <label for="pass" className="label"> Email Address</label>
            <input id="pass" type="text" className="input"  onChange={(e) => {setuserEmail(e.target.value)}}/>
          </div>
          <div className="group">
            <label for="pass" className="label"> Password</label>
            <input
              id="pass"
              type="password"
              className="input"
              data-type="password"
              onChange={(e) => {setpassword(e.target.value)}}
            />
          </div>
          <div className="group_1">
            <input id="check" type="checkbox" className="check" checked />
            <label for="check"><span className="icon"></span> Keep me Signed in</label>
          </div>
          <div className="group">
            <input type="submit" className="button" value="Sign In"  onClick={() => {Handlesubmit();}}/>
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
