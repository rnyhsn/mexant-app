import React from 'react'
import ServiceBanner from './ServiceBanner'
import ServiceSection from './ServiceSection'
import Solution from '../home/Solution'
import InvestmentDetails from './InvestmentDetails'


const Services = () => {
  return (
    <div className="flex flex-col gap-20">
      <ServiceBanner />
      <ServiceSection />
      <Solution />
      {/* <InvestmentDetails /> */}
    </div>
  )
}

export default Services
