import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Contact Page</h2>
        <img
          src="/image.png" 
          alt="Team Members"
          style={{ maxWidth: '25%', height: '50%' }}
        />
      </div>
    );
  }
}

export default Contact;
