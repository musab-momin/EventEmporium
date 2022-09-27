import React from "react";

const GalleryItem = ({ name, imgWeb, imgNorm }) => {
  return (
      <div className="gallery-item" data-aos="zoom-in" data-aos-duration="500">
        <img
          src={imgWeb}
          srcSet={`${imgNorm}, ${imgWeb}`}
          sizes="(max-width: 710px) 120px,
          (max-width: 991px) 193px,
          278px"
          alt="#"
          className="gallery-img"
        />
        <p className="gallery-title">{name}</p>
      </div>
  );
};

export default GalleryItem;
