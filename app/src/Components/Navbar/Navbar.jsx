import React from 'react';
import './navbar.css';
import logo from '../../assets/images/clapperboard.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="nav-bar">
    <div className="navigate_logo">
        <img src={logo} alt="" />
        <span>Entertain.</span>
    </div>
    <Link to="/search">
    <input type="text" class="trending_navbar-search" placeholder="Search" onKeyUp={(e) => {console.log(e.target.value)}} />
    </Link>
</div>
  )
}

export default Navbar;