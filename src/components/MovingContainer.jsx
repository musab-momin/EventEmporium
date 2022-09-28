import React, { useEffect, useState } from "react";

const MovingContainer = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setPosition(window.scrollY / 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [position]);

  return(
    <div className="move-container" style={{ top: `${position}px` }}></div>
  );
};

export default MovingContainer;
