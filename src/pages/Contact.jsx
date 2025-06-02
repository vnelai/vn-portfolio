import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from '../components/contact-components/contact-form/ContactForm';
import StayConnected from '../components/contact-components/stay-connected/StayConnected';
import HeroContact from '../components/contact-components/hero-contact/HeroContact';

function Contact() {
  return (
    <>
      <HeroContact />
      <div id="contact">
        <ContactForm />
      </div>
      <StayConnected/>
    </>
  );
}

export default Contact;