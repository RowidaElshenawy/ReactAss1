import React from 'react'
import { Link, NavLink } from 'react-router'
import About from '../About/About'
import NavStyle from './NavBar.module.css'

export default function NavBar() {
  return (
   <div>
  <nav className={`navbar navbar-expand-lg ${NavStyle.myNav}` }>
    <div className="container">
      <Link to={""} className="navbar-brand fs-2">START FRAMEWORK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={'about'} className={({isActive})=> isActive ? `${NavStyle.active} nav-link `: "nav-link"}  aria-current="page">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'portfolio'} className={({isActive})=> isActive ? `${NavStyle.active} nav-link` : "nav-link"}>PORTFOLIO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'contact'} className={({isActive })=> isActive ? `${NavStyle.active} nav-link ` : "nav-link"}>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}
