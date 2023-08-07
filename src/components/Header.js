import React, { useState} from 'react';
import "../components/styles/Header.css"
import Logo from "../components/assets/logo1.png"

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
            <img className="logo-img" src = { Logo } alt = "Little Lemon logo" />
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><a href="/">Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
        <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={20} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
        </div>
      </header>
    </>
  )
}

export default Header