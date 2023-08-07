import React from 'react';
import "./styles/HeaderElement.css";
import Header from './Header';
import MobileNav from './MobileNav';

const Navbar = () => {

  return (
    <div className="header">
      <div className="header-wrapper">
        <Header />
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar