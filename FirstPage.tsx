import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom'; // version 5.2.0

const FirstPage = () => {
  const history = useNavigate(); // Initialize useHistory

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Save user details to localStorage
    localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
    // Redirect to the second page
    history('/second');
  };

  return (
    <div>
      <h1>First Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FirstPage;
