import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServiceSlide from './ServiceSlide';
import './styles.css';

// import required modules
import { Navigation } from "swiper";
import { useMediaQuery } from '../../misc/custom.hooks';
import { servercesData } from '../../misc/service.data'; 


const ServiceSection = () => {

    const isMobile = useMediaQuery('(max-width: 750px)');
  
    return (
    <section className='service-sec' id='service'>
        <div className='service-container'>
            <h1 className='primay-heading' data-aos="zoom-in-right">Event Emporium Services</h1>
        </div>
        <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={100}
        slidesPerGroup={isMobile ? 1 : 3}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper-container"
        data-aos="fade-up"
      >
        {
            servercesData.map((item) =>( 
                <>
                    <SwiperSlide key={item.name} className='service-slide'>
                        <ServiceSlide {...item}/>
                    </SwiperSlide>
                </> )
            )
        }
      </Swiper>

    </section>
  )
}

export default ServiceSection