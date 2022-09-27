import React from "react";

const BlinkAnimation = () => {
  return (
    <div className="loader">
      Sending<span className="loader__dot">.</span>
      <span className="loader__dot">.</span>
      <span className="loader__dot">.</span>
    </div>
  );
};

export default BlinkAnimation;
