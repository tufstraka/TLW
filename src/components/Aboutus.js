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
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQG-QKBt32qAew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723296535594?e=1729123200&v=beta&t=_jG9xZs6OGNV_ri2ZqFExc5YD7PCjwnMbYGYdNRUkJ4" alt="Keith Kadima" />
          <h3>Keith Kadima</h3>
        </div>
        <div className="team-member">
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQFdUsMs4IdfpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1624248708695?e=1729123200&v=beta&t=tV27Rw_Kd0OZlMv9vRRcQmmcI9tFCFXD2wSr-6LE41U" alt="James Gitere" />
          <h3>James Gitere</h3>
        </div>
        <div className="team-member">
          <img src="https://shirlyneodhiambo.carrd.co/assets/images/image03.jpg?v=1a07be7b" alt="Shirleen Odhiambo" />
          <h3>Shirleen Odhiambo</h3>
        </div>
        <div className="team-member">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQELXdPv639O4w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699938883733?e=1729123200&v=beta&t=Wko6XC-cPtNRi9aNO5oEv6NnCVvvbjtdxkRIK8mqSP4" alt="Kevin Isom" />
          <h3>Kevin Isom</h3>
        </div>
        <div className="team-member">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHkGlxBiONJrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713343342317?e=1729123200&v=beta&t=CoZ55_NUb8mZC9znbt6CZYnRULxY5wqffjNOs4_xCjU" alt="Doreen Nangira" />
          <h3>Doreen Nangira</h3>
        </div>
      </div> 
    </div>
  );
};

export default AboutUs;
