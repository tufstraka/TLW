import React from "react";
import "./Aboutus.css"; // import relevant CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Our Time Lock Wallet</h1>
      <p>
        Our time lock wallet is a secure and easy-to-use way to manage your
        cryptocurrency assets. With our unique time lock feature, you can set
        specific times when your assets will become available, helping you stay
        on track with your financial goals.
      </p>
      <p>
        Our team of experienced developers and designers are committed to
        creating a seamless user experience. We understand that trust is crucial
        when it comes to managing your finances, which is why we prioritize
        security and transparency in everything we do.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026023d" alt="John Doe" />
          <h3>Msee flani</h3>
          <p>Founder &amp; CEO</p>
        {/*</div>
        <div className="team-member">
          <img src="/images/jane.jpg" alt="Jane Doe" />
          <h3>Jane Doe</h3>
          <p>Lead Designer</p>
        </div>
        <div className="team-member">
          <img src="/images/bob.jpg" alt="Bob Smith" />
          <h3>Bob Smith</h3>
          <p>Lead Developer</p>
        </div>*/}
  </div> 
    </div>
    </div>
  );
};

export default AboutUs;
