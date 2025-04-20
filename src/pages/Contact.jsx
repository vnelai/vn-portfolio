import React from 'react';
import ContactForm from '../components/contact-components/contact-form/ContactForm';
import StayConnected from '../components/contact-components/stay-connected/StayConnected';
import HeroContact from '../components/contact-components/hero-contact/HeroContact';

function Contact() {
  return (
    <>
      <HeroContact />
      <ContactForm />
      <StayConnected/>
    </>
  );
}

export default Contact;