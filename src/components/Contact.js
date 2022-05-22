import React from 'react'
import IntroSection from './contact/intro/Intro'
import ContactSection from './contact/contact-section/ContactSection'
import FooterSection from './contact/footer/Footer' 

import './contact.css'

function Contact() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default Contact;