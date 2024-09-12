import React from 'react'
import ContactBanner from './ContactBanner'
import ContactInfoSection from './ContactInfoSection'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="flex flex-col">
      <ContactBanner />
      <ContactInfoSection />
      <ContactForm />
    </div>
  )
}

export default Contact
