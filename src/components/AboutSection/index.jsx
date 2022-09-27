import React from 'react'
import './styles.css';
import DinningWeb from '../../assets/images/webps/dinning_hall.webp'
import Dinning from '../../assets/images/others/dinning_hall.jpg'




const AboutSection = () => {

  return (
    <section className='about-sec' id='about'>
        <div className='about-container'>
            <div className='about-image'>
                <img 
                src={DinningWeb} 
                srcSet={`${DinningWeb}, ${Dinning}`}
                sizes="(max-width: 710px) 120px,
                (max-width: 991px) 193px,
                278px" 
                alt='#'
                data-aos="fade-right"
                />
            </div>
            <div className='about-content'>
                <h2 className='about-heading'  data-aos="zoom-in-down">
                    Welcome to Event Emporium
                </h2>
                <p className='tag-line' data-aos="zoom-in">"Bringing Dreamscapes To Reality"</p>
                <p className='about-para' data-aos="zoom-out-up">
                When you’re planning an event, it is easy to second guess your desires for the big day.
                Opinions of friends and family, Pinterest, Instagram can make the task of planning your big day seem an overwhelming test.
                We’re here to listen to your wild ideas and bring them to life 
                Planning your event should be an exciting and magical time, so let’s grab some coffee and work together to make 
                your dreams come true 
                </p>
                <h3 className='about-sub-heading' data-aos="zoom-out-down">
                Event Emporium
                </h3>
            </div>
        </div>
    </section>
  )
}

export default AboutSection