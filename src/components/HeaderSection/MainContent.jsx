import React from "react";
import LogoWeb from "../../assets/images/webps/logo.webp";
import Logo from "../../assets/images/others/logo.png";
import EventTreeWeb from "../../assets/images/webps/event-tree.webp";
import EventTree from "../../assets/images/others/event-tree.png";

const MainContent = () => {
  return (
    <section className="header-sec">
      <div className="header-sec__content">
        <div className="img-container">
          <img
            src={LogoWeb}
            srcSet={`${LogoWeb}, ${Logo}`}
            sizes="(max-width: 710px) 120px,
            (max-width: 991px) 193px,
            278px"
            alt="#"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
        </div>
        <div className="moto-container">
          <p className="moto" data-aos="fade-up">
            <span>"</span>
            Bringing Dreamscapes To Reality
            <span>"</span>
          </p>
        </div>
        <div className="btn-container">
          <a
            href="#quote"
            className="quote-btn"
          >
            Get a Quote
          </a>
        </div>
      </div>
      <div className="header-sec__img">
        <img
          src={EventTreeWeb}
          srcSet={`${EventTreeWeb} ${EventTree}`}
          sizes="(max-width: 710px) 120px,
        (max-width: 991px) 193px,
        278px"
          alt="#"
          data-aos="fade-down"
        />
      </div>
    </section>
  );
};

export default MainContent;
