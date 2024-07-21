// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/logo.png';
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/blogs" className="nav-link" activeClassName="active">
          Blogs
        </NavLink>
        <NavLink to="/discover" className="nav-link" activeClassName="active">
          Discover Froker
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
