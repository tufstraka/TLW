import React from 'react';
import { Link } from "react-router-dom"
import './landingstyles.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1 className="title">Welcome to Transpesa</h1>
        <p className="subtitle">Empowering Global Financial Freedom</p>
    <Link to="/timelock">
        <button className="cta-button">Get Started</button>
    </Link>
    </div>
      <div className="features">
        <div className="feature">
          <img src="/secure-pc-svgrepo-com.svg" alt="Secure Transactions" className="feature-icon" />
          <h2 className="feature-title">Secure Transactions</h2>
          <p className="feature-description">Utilizing blockchain technology for secure and transparent transactions.</p>
        </div>
        <div className="feature">
          <img src="/transfer-svgrepo-com.svg" alt="Fast Transactions" className="feature-icon" />
          <h2 className="feature-title">Instant Transfers</h2>
          <p className="feature-description">Experience real-time transfers with low fees and no delays.</p>
        </div>
        <div className="feature">
          <img src="/global-svgrepo-com.svg" alt="Global Reach" className="feature-icon" />
          <h2 className="feature-title">Global Accessibility</h2>
          <p className="feature-description">Send and receive money worldwide, regardless of location.</p>
        </div>
      </div>
      <div className="newsletter">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-description">Subscribe to our newsletter for the latest updates and promotions.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
