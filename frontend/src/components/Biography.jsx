import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At Mediflow-Tech, we are dedicated to revolutionizing healthcare management with seamless, efficient, and innovative digital solutions. Our platform is designed to simplify hospital operations, enhance patient care, and optimize resource management for healthcare providers.
          <br /> <br /> With a focus on streamlining processes, Mediflow-Tech offers real-time bed availability tracking, ensuring patients get the care they need without delay. Our advanced medicine tracking system helps hospitals manage drug inventories efficiently, reducing waste and ensuring that the right medications are always on hand. From appointment scheduling to patient record management, Mediflow-Tech ensures that hospitals run smoothly, allowing healthcare professionals to focus on what truly matters—patient. <br /> <br /> Our mission is to empower hospitals with the tools they need to provide world-class healthcare services, improve operational efficiency, and enhance the patient experience. At Mediflow-Tech, we believe in the transformative power of technology in driving better healthcare outcomes for all.
          </p>
          
        
        </div>
      </div>
    </>
  );
};

export default Biography;
