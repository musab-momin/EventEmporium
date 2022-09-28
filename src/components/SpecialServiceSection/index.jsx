import React from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import border from "../../assets/images/others/special-services-border.png";
import { SpecialServiceData } from "../../misc/special.service.data";
import Event from "./Event";

const SpecialServiceSection = () => {
  return (
    <section className="spe-service-sec" id="special-service">
      <div className="service-container">
        <h1 className="spe-service-title"  data-aos="fade-down">Our Special Services</h1>
      </div>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="swiper-container"
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
      >
        {SpecialServiceData.map((event, indx) => (
          <>
            <SwiperSlide key={indx} className="spe-service-slide">
              <Event {...event} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <div className="border-img-container">
        <img src={border} alt="#" className="mt-3 center"/>
      </div>
    </section>
  );
};

export default SpecialServiceSection;
