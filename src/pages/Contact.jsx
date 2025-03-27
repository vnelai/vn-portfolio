import React from 'react';
import ContactForm from '../components/contact-form/ContactForm';
import StayConnected from '../components/stay-connected/StayConnected';

function Contact() {
  return (
    <div>
      <div className="contact-form">
        <ContactForm />
      </div>
      <StayConnected/>
    </div>
  )
}

export default Contact;