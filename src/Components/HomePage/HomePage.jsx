import React from 'react'
import CarouselHero from '../Carousel/CarouselHero';
import '../HomePage/HomePage.css';
import TutoringServicesSection from '../TutoringSection/TutoringServicesSection';
import MentorSection from '../Mentor Section/MentorSection';
import TestimonialSection from '../TestimonialsSection/TestimonialSection';

const HomePage = () => {
  return (
    <div className="body">
      <CarouselHero/>
      <TutoringServicesSection/>
      <MentorSection/>
      <TestimonialSection/>
    </div>
  )
}

export default HomePage