import React, { useState, useEffect } from 'react';
import './Beds.css';


const Beds = () => {
  const [beds, setBeds] = useState([]);

  useEffect(() => {

    const fetchBeds = async () => {
      const response = await fetch('../public/hospital-beds.json'); 
      const data = await response.json();
      setBeds(data);
    };

    fetchBeds();
  }, []);

  return (
    <>
   
    <div className="Beds">
      <h1>Hospital Bed Availability</h1>
      <div className="beds-container">
        {beds.length > 0 ? (
          beds.map((bed, index) => (
            <div key={index} className="bed-card">
              <h2>{bed.hospitalName}</h2>
              <p>Total Beds: {bed.totalBeds}</p>
              <p>Available Beds: {bed.availableBeds}</p>
              <p>Location: {bed.location}</p>
            </div>
          ))
        ) : (
          <p>Loading bed data...</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Beds;
