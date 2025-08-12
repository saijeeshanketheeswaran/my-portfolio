import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "ca340e64-4241-4966-94b4-21264c683ab2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 10000);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">I would love to hear from you! Whether it is about a project or a collaboration, feel free to reach out.</p>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>

          {status === "success" && (
            <div className="form-status success">Message sent successfully!</div>
          )}
          {status === "error" && (
            <div className="form-status error">Something went wrong. Please try again later.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
