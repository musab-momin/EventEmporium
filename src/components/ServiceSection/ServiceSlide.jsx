import React from "react";

const ServiceSlide = ({ name, description, imgWeb, imgNorm }) => {
  return (
    <>
      <img
        src={imgWeb}
        srcSet={imgNorm}
        alt="#"
        className="service-image"
      />
      <div>
        <h2 className="event-title">{ name }</h2>
        <p className="event-para">
          { description }
        </p>
      </div>
    </>
  );
};

export default ServiceSlide;
