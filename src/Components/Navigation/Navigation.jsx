import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <>
    <div className="navigate">
            <div className="navigate_menu">
                <h3 className="title">Menu</h3>
                <a href="#" className="navigate_menu-link">
                    Home
                </a>
                <a href="#" className="navigate_menu-link">
                    Movies
                </a>
                <a href="#" className="navigate_menu-link">
                    TV Series
                </a>
                <a href="#" className="navigate_menu-link">
                    Bookmarked
                </a>
            </div>
            <div className="navigate_general">
                <h3 className="title">General</h3>
                <a href="#" className="navigate_general-link">
                    Login
                </a>
                <a href="#" className="navigate_general-link">
                    Sign up
                </a>
            </div>
        </div></>
  )
}

export default Navigation;