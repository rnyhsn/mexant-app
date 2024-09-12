import React from 'react'
import Banner from './Banner'
import Featured from './Featured'
import Solution from './Solution'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import TestimonialSection from './TestimonialSection'

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <Featured />
      <Solution />
      <AboutSection />
      <ContactSection />
      <TestimonialSection />
    </div>
  )
}

export default Home
