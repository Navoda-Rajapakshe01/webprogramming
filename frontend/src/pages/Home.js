import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Our Hospital</h1>
        <p>Providing Compassionate Care and Excellent Medical Services</p>
      </header>

      <main className="homepage-main">
        <button className="homepage-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="homepage-button" onClick={() => navigate('/register')}>
          Register
        </button>
      </main>
    </div>
  );
};

export default HomePage;
