import React from 'react'
import Image from './assets/restauranfood.jpg'
import './styles/HeroSection.css'
const HeroSection = () => {
  return (

    <div className='hero-container'>
    <div className='leftSide'>
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
    <p className='hero-desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <a href="/reservations" className='res-btn'>Reserve a table</a>
    </div>
    <div className='rightSide'>
        <img src={Image} className='hero-image' alt='restaurant food'></img>
    </div>
    </div>
  )
}

export default HeroSection