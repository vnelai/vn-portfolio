import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [status, setStatus] = useState(""); // "Sending…", "Sent!", or error

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot field
  });

  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    // Update form state while keeping the existing data using spread operator
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Bail early if honeypot is filled (spam bot)
    if (formData.website) {
      return;
    }

    setStatus("Sending…");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      setStatus("Sent!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });

      // Optional: reset form state after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setStatus("");
      }, 4000);

    } catch (err) {
      console.error(err);
      setStatus("Failed — try again.");
    }
  };

  return (
    <div className="contact-form-div">
      <h1>Let's Connect</h1>
      {submitted ? (
        <p className="thank-you">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name"> Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            required
          />

          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <label htmlFor="subject"> Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={handleChange}
            value={formData.subject}
            required
          />

          <label htmlFor="message"> Message:</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>

          {/* Honeypot field (hidden from humans) */}
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex="-1"
          />

          <div className="btn-div">
            <button
              type="submit"
              className="form-btn"
              disabled={status === "Sending…"}
            >
              {status === "Sending…" ? "Sending…" : "Send"}
            </button>
          </div>
          {status && (
            <p className="thank-you" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default ContactForm;
