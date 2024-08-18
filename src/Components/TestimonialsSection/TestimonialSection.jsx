import React from 'react';
import TestimonialCard from './TestimonialCard';
import profilePic from "../../assets/TestimonialSectionAssets/profile.jpeg";
const TestimonialSection = () => {
  return (
    <div className='testimonial-wrapper p-1 m-4 rounded-5'  id='Testimonials'>
      <div className='testimonial-heading p-4'><h2>Testimonials</h2></div>
      <div className='row g-3'>
        <div className='col-12 col-lg-6'>
          <TestimonialCard 
          profession="Student"
            name="Jone Doe"
             profileimg={profilePic}
              description="Simple Secure access to digital education. Students have a plethora of course to upskill themselves" />
        </div>
        <div className='col-12 col-lg-6'>
        <TestimonialCard 
          profession="Student"
            name="Jone Doe"
             profileimg={profilePic}
              description="Simple Secure access to digital education. Students have a plethora of course to upskill themselves" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
