import React from "react";
import "./styles.css";
import DinningWeb from "../../assets/images/webps/dinning_hall.webp";
import Dinning from "../../assets/images/others/dinning_hall.jpg";

const AboutSection = () => {
  return (
    <section className="about-sec" id="about">
      <div className="about-image-container">
        <img
          src={DinningWeb}
          srcSet={`${DinningWeb}, ${Dinning}`}
          sizes="(max-width: 710px) 120px,
                (max-width: 991px) 193px,
                278px"
          alt="#"
          data-aos="fade-right"
        />
      </div>
      <div className="about-content-container">
        <div className="about-title-container">
          <h1 className="about-title" data-aos="zoom-in-down">Welcome to Event Emporium</h1>
          <p className="about-slogan" data-aos="zoom-in">"Bringing Dreamscapes To Reality"</p>
        </div>
        <div className="about-para-container">
          <p className="about-para mt-3" data-aos="zoom-out-up">
            When you’re planning an event, it is easy to second guess your
            desires for the big day. Opinions of friends and family, Pinterest,
            Instagram can make the task of planning your big day seem an
            overwhelming test. We’re here to listen to your wild ideas and bring
            them to life Planning your event should be an exciting and magical
            time, so let’s grab some coffee and work together to make your
            dreams come true.
          </p>
        </div>
        <div className="about-sub-heading-container">
            <h2 className="about-sub-heading mt-3" data-aos="zoom-out-down">Event Emporium</h2>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
