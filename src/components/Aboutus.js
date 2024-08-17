import React from "react";
import "./Aboutus.css";

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
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026023d" alt="Keith Kadima" />
          <h3>Keith Kadima</h3>
        </div>
        <div className="team-member">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026023d" alt="James Gitere" />
          <h3>James Gitere</h3>
        </div>
        <div className="team-member">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026023d" alt="Shirleen Odhiambo" />
          <h3>Shirleen Odhiambo</h3>
        </div>
        <div className="team-member">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQELXdPv639O4w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699938883733?e=1729123200&v=beta&t=Wko6XC-cPtNRi9aNO5oEv6NnCVvvbjtdxkRIK8mqSP4" alt="Kevin Isom" />
          <h3>Kevin Isom</h3>
        </div>
        <div className="team-member">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026023d" alt="Doreen Nangira" />
          <h3>Doreen Nangira</h3>
        </div>
      </div> 
    </div>
  );
};

export default AboutUs;

