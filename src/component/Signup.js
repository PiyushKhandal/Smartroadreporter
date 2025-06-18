import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup with:', { name, email, password });
    setMessage('Signup successful!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSignup} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>नाम</label><br />
        <input
          type="text"
          value={name}
          placeholder="अपना नाम डालें"
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>ईमेल</label><br />
        <input
          type="email"
          value={email}
          placeholder="अपना ईमेल डालें"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>पासवर्ड</label><br />
        <input
          type="password"
          value={password}
          placeholder="पासवर्ड डालें"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#003366',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Signup
      </button>

      {message && (
        <p style={{ color: 'green', marginTop: '15px', textAlign: 'center' }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default Signup;
