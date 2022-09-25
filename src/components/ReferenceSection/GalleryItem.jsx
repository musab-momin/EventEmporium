import React from "react";

const GalleryItem = ({ name, imgWeb, imgNorm }) => {
  return (
      <div className="gallery-item">
        <img
          src={imgWeb}
          srcSet={imgNorm}
          alt="#"
          className="gallery-img"
        />
        <p className="gallery-title">{name}</p>
      </div>
  );
};

export default GalleryItem;
