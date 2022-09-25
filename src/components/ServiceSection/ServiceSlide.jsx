import React from "react";

const ServiceSlide = ({ name, description, imgWeb, imgNorm }) => {
  return (
    <>
      <img
        src={imgWeb}
        srcSet={`${imgNorm}, ${imgWeb}`}
        sizes="(max-width: 710px) 120px,
        (max-width: 991px) 193px,
        278px"  
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
