import React, { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e)=> {
        // Update form state while keeping the existing data using spread operator 
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //stops the page from refreshing 
        console.log("Form submitted:", formData);
        // Add logic to send data to backend or email service
    };

  return (
    <div>
        <h1>Let's Connect</h1>
        <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor="name"> Name:</label>
            <input 
            type="text" 
            name="name" 
            id='name' 
            onChange={handleChange}
            value={formData.name} //Control value of input
            />
            <label htmlFor="email"> Email:</label>
            <input 
            type="email" 
            name="email" 
            id='email' 
            onChange={handleChange}
            value={formData.email} //Control value of input
            />
            <label htmlFor="subject"> Subject:</label>
            <input 
            type="text" 
            name="subject" 
            id='subject' 
            onChange={handleChange}
            value={formData.subject} //Control value of input
            />
            <label htmlFor="message"> Message:</label>
            <textarea 
            type="text" 
            name="message" 
            id='message' 
            onChange={handleChange}
            value={formData.message} //Control value of input
            >
            </textarea>
            <button type="submit" className='form-btn'>Send</button>
        </form>
    </div>
  );
};

export default ContactForm