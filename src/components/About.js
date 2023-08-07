import React from 'react'
import restaurant from './assets/restaurant.jpg'
import './styles/About.css'

const About = () => {
  return (
    <div className='about-cont'>
        <div className='left-side'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className='about-desc'>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className='right-side'>
            <img src={restaurant} className='about-img' alt='restaurant'></img>
        </div>
    </div>
  )
}

export default About