import React from 'react'
import { NavLink } from 'react-router-dom';

function Surprisepage() {

  
   const Handleout = () => {
    let tokenval = localStorage.getItem("token");
    if (tokenval) {
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
    }
   }
  return (
    <div>
        Surprisepage 
        <div>
          <NavLink to="/" onClick={Handleout}>Logout</NavLink>
        </div>
    </div>
  )
}

export default Surprisepage
