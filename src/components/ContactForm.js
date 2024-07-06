import React, { useState } from 'react';
import './contactform.style.scss'; // Ensure the CSS file is imported

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting', { name, email, message });
    // Integration with backend or email service goes here
  };
  return (
    <form onSubmit={handleSubmit}  style={{backgroundColor:'#78c3e0', color:'white', marginTop:'-60px', marginBottom:'60px'}} className="form-container">
      <div>
        <label style={{color:'white'}}htmlFor="name" className="form-label">Nome:</label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label style={{color:'white'}} htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label style={{color:'white'}} htmlFor="message" className="form-label">Messaggio:</label>
        <textarea
          id="message"
          className="form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-submit">Send</button>
    </form>
  );
}

export default ContactForm;


