import React, { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false); // Track form submission

    const handleChange = (e)=> {
        // Update form state while keeping the existing data using spread operator 
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //stops the page from refreshing 
        console.log("Form submitted:", formData);
        // Add logic to send data to backend or email service
        setSubmitted(true); // Show thank-you message
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    };

  return (
    <div>
        <h1>Let's Connect</h1>
        {submitted ? (
            <p className="thank-you">Thank you for reaching out! I'll get back to you soon.</p>
        ) : (
            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor="name"> Name:</label>
                <input type="text" name="name" id='name' onChange={handleChange} value={formData.name} required />
                
                <label htmlFor="email"> Email:</label>
                <input type="email" name="email" id='email' onChange={handleChange} value={formData.email} required />
                
                <label htmlFor="subject"> Subject:</label>
                <input type="text" name="subject" id='subject' onChange={handleChange} value={formData.subject} required />
                
                <label htmlFor="message"> Message:</label>
                <textarea name="message" id='message' onChange={handleChange} value={formData.message} required></textarea>
                
                <button type="submit" className='form-btn'>Send</button>
            </form>
        )}
    </div>
  );
};

export default ContactForm;