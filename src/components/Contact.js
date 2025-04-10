import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">I would love to hear from you! Whether it is about a project or a collaboration, feel free to reach out.</p>

      <div className="contact-content">

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
