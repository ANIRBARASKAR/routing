import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/Login">Login</Link>
              <Link className="nav-link" to="/Registr">Registr</Link>
              <Link className="nav-link" to="/About">About</Link>
              <Link className="nav-link" to="/addmin/DashBord">DashBoard</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
{/* <Link to="/">Home</Link>
<br />
<Link to="/login">login</Link>
<br />
<Link to="/registered">Registered</Link>
<br />
<Link to="/error">error</Link> */}