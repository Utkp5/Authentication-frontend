import React from 'react'
import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <div>
      <NavLink to="/Signup">Go to Sign up page</NavLink>
      <br />
      <br />
      <NavLink to="/Login">Go to Login page</NavLink>
      </div>
    </div>
  )
}

export default HomePage
