import React, { useState } from "react";
import Burger from "../../assets/images/icons/humburger.png";
import Cross from "../../assets/images/icons/cross.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showNavbar = () => {
    setIsVisible(true);
  };

  const hideNavbar = () => {
    setIsVisible(false);
  }

  return (
    <>
      <button type="button" className="btn nav-btn" onClick={showNavbar}>
        <img src={Burger} alt="#" />
      </button>

      <div className={`navbar ${ isVisible ? 'show' : '' }`}>
        <div className="cross">
          <button type="button" className="btn" onClick={hideNavbar}>
            <img src={Cross} alt="#" />
          </button>
        </div>
        <ul className="pages-container">
                <li className="single-page"><a href="#home" className="page-link">Home</a></li>
                <li className="single-page"><a href="#home" className="page-link">About</a></li>
                <li className="single-page"><a href="#home" className="page-link">Services</a></li>
                <li className="single-page"><a href="#home" className="page-link">Gallery</a></li>
                <li className="single-page"><a href="#home" className="page-link">Contact</a></li>
                <li className="single-page link-special"><a href="#home" className="small-link">Get A Quote</a></li>
            </ul>
      </div>
    </>
  );
};

export default Navbar;
