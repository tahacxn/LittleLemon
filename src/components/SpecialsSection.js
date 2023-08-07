import React from 'react'
import './styles/SpecialsSection.css'
import SpecialCard from './SpecialCard'

const SpecialsSection = () => {
  return (
    <div className="specials-section-container">
    <div className="specials-section-title">
          <h2>This Week's Specials</h2>
         <a href="/reservations"className='spec-btn'>Order Online</a>
    </div>
    <SpecialCard/>
  </div>
  )
}

export default SpecialsSection