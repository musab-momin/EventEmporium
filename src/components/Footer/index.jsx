import React from 'react'
import './styles.css';
import PhoneIcon from '../../assets/images/icons/phone-icon.png'
import EmailIcon from '../../assets/images/icons/email-icon.png'


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
            <img src={PhoneIcon} alt='#' />
            <p>8898743746</p>
          </div>
          <div className='footer-contact'>
            <img src={EmailIcon} alt='#' />
            <p>dummary@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer