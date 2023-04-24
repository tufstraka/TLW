import React from "react";
import "./FAQ.css"; // import relevant CSS file

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-question">
        <h2>What is a time lock wallet?</h2>
        <p>
          A time lock wallet is a type of cryptocurrency wallet that allows you
          to lock your funds for a specific period of time. This can help you
          stay on track with your financial goals and avoid making impulsive
          decisions.
        </p>
      </div>
      <div className="faq-question">
        <h2>How secure is your time lock wallet?</h2>
        <p>
          We take security very seriously and use industry-standard encryption
          and authentication protocols to protect your assets. The code is also open source.{/*We also
          recommend that you take additional steps to secure your account, such
          as enabling two-factor authentication and using a strong, unique
  password.*/}
        </p>
      </div>
      <div className="faq-question">
        <h2>What happens if I lose access to my account?</h2>
        <p>
          If you lose access to your account, we have a recovery process in
          place that allows you to regain access to your funds. However, this
          process can take some time and requires you to provide proof of
          ownership of the account.
        </p>
      </div>
      <div className="faq-question">
        <h2>How do I contact customer support?</h2>
        <p>
          You can contact our customer support team by emailing
          mseeflani@proton.me. We strive to respond to all inquiries as
          quickly as possible, usually within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
