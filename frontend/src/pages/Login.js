import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    axios.post('http://localhost:8000/api/login', formData)
      .then((response) => {
        console.log('Login successful:', response.data);
        // Store the token or handle user authentication
      })
      .catch((error) => {
        setError('Invalid credentials. Please try again.');
        console.error(error);
      });
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    console.log("Redirect to forgot password page");
    // Redirect to forgot password page or show modal
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit">Login</button>

        <div className="forgot-password">
          <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
