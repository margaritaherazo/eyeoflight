import React from 'react';


function Contact() {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" required />
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  