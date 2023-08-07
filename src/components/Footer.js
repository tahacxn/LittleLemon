import React from 'react'
import Logo2 from './assets/logo2.png'
import './styles/Footer.css'

const Footer = () => {
  return (
   <footer>
    <div className='footer-logo'>
      <img src={Logo2} alt='footer logo'></img>
    </div>
    <div>
      <ul className='footer-links'>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href='/'>Order Online</a></li>
        <li><a href='/'>Login</a></li>
      </ul>
    </div>
    <div>
      <h6>Contact</h6>
      <p>Adress</p>
      <p>Phone</p>
      <p>Email</p>
    </div>
    <div>
      <h6>Social Media</h6>
      <p>Facebook</p>
      <p>Instagram</p>
      <p>Twitter</p>
    </div>
   </footer>
  )
}

export default Footer