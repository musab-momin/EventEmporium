import React from 'react'
import LogoWeb from '../../assets/images/webps/logo.webp';
import Logo from '../../assets/images/others/logo.png';
import EventTreeWeb from '../../assets/images/webps/event-tree.webp';
import EventTree from '../../assets/images/others/event-tree.png';



const MainContent = () => {
  return (
    <section className='header-sec'>
        <div className='header-sec__content'>
            <div className='img-container'>
                <img src={LogoWeb} srcSet={Logo} alt='#' />
            </div>
            <div className='moto-container'>
                <p className='moto'>
                    <span>"</span>
                    Bringing Dreamscapes To Reality
                    <span>"</span>
                </p>
            </div>
            <div className='btn-container'>
                <a href='#quote' className='quote-btn'>Get a Quote</a>
            </div>
        </div>
        <div className='header-sec__img'>
            <img src={EventTreeWeb} srcSet={EventTree} alt='#' />
        </div>
    </section>
  )
}

export default MainContent