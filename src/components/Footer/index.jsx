import React from 'react'
import './styles.css';
import PhoneIcon from '../../assets/images/icons/phone-icon.png'
import EmailIcon from '../../assets/images/icons/email-icon.png'
import InstagramIcon from '../../assets/images/icons/instagram-icon.png'
import FacebookIcon from '../../assets/images/icons/facebook-icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-part'>
        <h3 className='footer-title'>About Us</h3>
        <p>
        We’ve handpicked and designed set ups for kid’s parties, wedding celebrations, 
        private and corporate events, 
        at-home gatherings in Mumbai. 
        </p>
      </div>
      <div className='footer-part'>
        <h3 className='footer-title'>Quick Links</h3>
         <div className='footer-links'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#service'>Services</a>
            <a href='#special-service'>Special Services</a>
            <a href='#gellary'>Gellary</a>
            <a href='#quote'>Quote</a>
         </div>
      </div>
      <div className='footer-part'>
        <h3 className='footer-title'>Contact</h3>
        <div>
          <div className='footer-contact'>
            <img src={PhoneIcon} alt='#' className='footer-contact-img' />
            <p>8898743746</p>
          </div>
          <div className='footer-contact'>
            <img src={EmailIcon} alt='#' className='footer-contact-img' />
            <p>barisha@eventemporium.in</p>
          </div>
          <div className='footer-contact justify-center'>
            <a href="https://www.instagram.com/eventemporium.09/" referrerPolicy='no-referrer' rel='external'>
              <img src={InstagramIcon} alt='#' className='social-icon' />
            </a>
            <a href="#home" referrerPolicy='no-referrer' rel='external'>
              <img src={FacebookIcon} alt='#' className='social-icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer