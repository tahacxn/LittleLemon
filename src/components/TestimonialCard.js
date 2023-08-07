import React from 'react'
import Testimonial1 from './assets/photo-1438761681033-6461ffad8d80.avif'
import Testimonial2 from './assets/photo-1500648767791-00dcc994a43e.avif'
import Testimonial3 from './assets/photo-1506863530036-1efeddceb993.avif'
import Testimonial4 from './assets/photo-1564564321837-a57b7070ac4f.avif'
import './styles/TestimonialCard.css'
const TestimonialCard = () => {
  return (
    <>
    <div className='test-container'>

    <div className='test-card'>
        <div className='test-img'>
            <img src={Testimonial1} alt='testimonial 1'></img>
            <h4 className='name'>Karla</h4>
        </div>
            <p className='review'>"Impeccable attention to detail and exquisite cuisine"</p>
    </div>
    <div className='test-card'>
        <div className='test-img'>
            <img src={Testimonial2} alt='testimonial 2'></img>
            <h4 className='name'>John</h4>
        </div>

            <p className='review'>"Fantastic service and mouthwatering dishes - Little Lemon never disappoints!"</p>

    </div>
    <div className='test-card'>
        <div className='test-img'>
            <img src={Testimonial3} alt='testimonial 3'></img>
            <h4 className='name'>Rachel</h4>
        </div>

            <p className='review'>"A hidden gem worth discovering"</p>

    </div>
    <div className='test-card'>
        <div className='test-img'>
            <img src={Testimonial4} alt='testimonial 4'></img>
            <h4 className='name'>Toby</h4>
        </div>

        <p className='review'>"Exceptional hospitality and a warm atmosphere"</p>
    </div>
    </div>
    </>
  )
}

export default TestimonialCard
