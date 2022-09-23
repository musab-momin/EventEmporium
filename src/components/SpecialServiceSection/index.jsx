import React from "react";
import "./styles.css";
import { Swiper,SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import border from "../../assets/images/others/special-services-border.png";
import { SpecialServiceData } from "../../misc/special.service.data";
import Event from "./Event";

const SpecialServiceSection = () => {
  return (
    <section className="spe-service-sec">
      <div className="service-container">
        <h1 className="primay-heading text-center">Our Special Services</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="swiper-container"
      >
        {
            SpecialServiceData.map(event => (
                <>
                    <SwiperSlide className="spe-service-slide">
                        <Event key={event.id} {...event} />
                    </SwiperSlide>
                </>
            ))
        }
      </Swiper>
      <img src={border} alt="#" className="mt-3 center" />
    </section>
  );
};

export default SpecialServiceSection;
