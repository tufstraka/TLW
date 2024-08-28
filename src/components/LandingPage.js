import React from 'react';
import { Link } from "react-router-dom";
import './landingstyles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1 className="title">Welcome to Transpesa</h1>
        <p className="subtitle">Empowering Global Financial Freedom</p>
        <Link to="/timelock">
          <button className="cta-button">Get Started</button>
        </Link>
      </header>
      
      <section className="features">
        <div className="feature">
          <img src="/secure-pc-svgrepo-com.svg" alt="Secure Transactions" className="feature-icon" />
          <h2 className="feature-title">Secure Transactions</h2>
          <p className="feature-description">Blockchain technology ensures secure, transparent, and immutable transactions.</p>
        </div>
        <div className="feature">
          <img src="/transfer-svgrepo-com.svg" alt="Fast Transactions" className="feature-icon" />
          <h2 className="feature-title">Instant Transfers</h2>
          <p className="feature-description">Enjoy real-time transfers with low fees, ensuring your money moves as fast as you do.</p>
        </div>
        <div className="feature">
          <img src="/global-svgrepo-com.svg" alt="Global Reach" className="feature-icon" />
          <h2 className="feature-title">Global Accessibility</h2>
          <p className="feature-description">Transfer money worldwide, overcoming geographical barriers with ease.</p>
        </div>
      </section>

      <section className="newsletter">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-description">Subscribe to our newsletter for the latest updates, promotions, and industry news.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;

