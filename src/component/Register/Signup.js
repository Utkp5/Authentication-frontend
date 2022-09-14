import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NavLink } from "react-router-dom";

function Signup() {


  const [userName,setuserName]= useState();
  const [password,setpassword]= useState();
  const [repeatPassword,setrepeatPassword]= useState();
  const [userEmail,setuserEmail]= useState();


const Handlesubmit = async () => {
  const user = {
    userName,
    password,
    repeatPassword,
    userEmail,
  };
  await axios.post("http://localhost:5000/api/Signup",user).then(function (response) {
    
    if (response.data) {
      Notify.success('Register Successfully')
      window.location.href = "/Login";
    }
    

  }).catch(function (error) {
    Notify.failure('Something went Wrong!')
    console.log(error);
  });      
}


  return (
    <div className="container">
      <label className="tab">Sign Up</label>
      <div className="login-form">
        <div className="sign-up-htm">
          <div className="group">
            <label htmlFor="user" className="label">Username</label>
            <input id="user" type="text" className="input" onChange={(e) => {
              setuserName(e.target.value);
            }}/>
          </div>
          <div className="group">
            <label htmlFor="pass" className="label">Password</label>
            <input  type="password" className="input" onChange={(e) => {
              setpassword(e.target.value);
            }}/>
          </div>
          <div className="group">
            <label htmlFor="pass" className="label">Repeat Password</label>
            <input  type="password" className="input"  onChange={(e) => {
              setrepeatPassword(e.target.value);
            }}/>
          </div>
          <div className="group">
            <label htmlFor="pass" className="label">Email Address</label>
            <input  type="text" className="input" onChange={(e) => {
              setuserEmail(e.target.value);
            }}/>
          </div>
          <div className="group">
            <input type="submit" className="button" value="Sign Up" onClick={() => {Handlesubmit();}}/>
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
            <NavLink to="/Login">Already Member? Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
