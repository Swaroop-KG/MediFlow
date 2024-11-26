import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At Mediflow-Tech, we are committed to enhancing healthcare accessibility through cutting-edge technology solutions. Our hospital management system ensures real-time updates on bed availability, simplifying the process for patients and healthcare providers alike. With our user-friendly appointment scheduling system, Mediflow-Tech streamlines the patient experience, reducing wait times and improving overall efficiency. We prioritize patient care by connecting them with the right resources at the right time. Trust Mediflow-Tech to deliver reliable healthcare solutions that make a difference.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
