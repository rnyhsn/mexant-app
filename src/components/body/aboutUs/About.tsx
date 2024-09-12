import React from 'react'
import AboutBanner from './AboutBanner'
import AboutFeatured from './AboutFeatured'
import Solution from '../home/Solution'
import IdeaSection from './IdeaSection'

const About = () => {
  return (
    <div className="flex flex-col gap-20">
      <AboutBanner />
      <AboutFeatured />
      <Solution />
      <IdeaSection />
    </div>
  )
}

export default About
