import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Beds";
import Beds from "../components/Beds";
const AboutUs = () => {
  return (
    <>
       <Hero
        title={"Find Your Bed  At  Mediflow-Tech "}
        imageUrl={"/beds.png"}
      />
      <Beds/>
    </>
  );
};

export default AboutUs;