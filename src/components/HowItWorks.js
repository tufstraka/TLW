import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-it-works__title">How It Works</h2>
        <div className="how-it-works__steps">
          <div className="how-it-works__step">
            <div className="how-it-works__step-icon">
              <FontAwesomeIcon icon={faBitcoinSign} flip />
            </div>
            <h3 className="how-it-works__step-title">Step 1: Access the web app</h3>
            <p className="how-it-works__step-description">Scroll down below to access the prototype.</p>
          </div>
          <div className="how-it-works__step">
            <div className="how-it-works__step-icon">
            <FontAwesomeIcon icon={faLocationArrow} beat />            </div>
            <h3 className="how-it-works__step-title">Step 2: Create a Time Lock</h3>
            <p className="how-it-works__step-description">Create a time lock by setting a time and date for when you want your funds to become available.</p>
          </div>
          <div className="how-it-works__step">
            <div className="how-it-works__step-icon">
              <FontAwesomeIcon icon={faSatellite} pulse />
            </div>
            <h3 className="how-it-works__step-title">Step 3: Share Your Time Lock</h3>
            <p className="how-it-works__step-description">Share your time lock with friends, family, or colleagues to ensure accountability and transparency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
