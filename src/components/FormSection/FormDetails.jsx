import React from 'react'

import EmailIcon from '../../assets/images/icons/email-icon.png';
import PhoneIcon from '../../assets/images/icons/phone-icon.png';
import TelePhoneIcon from '../../assets/images/icons/tele-phone-icon.png';


const FormDetails = () => {
  return (
    <div className='frm-details'>
    <h3 className='frm-detail-title'>Quick Contact</h3>
    <div className='frm-detail'>
      <p className='frm-detail-para'><img src={EmailIcon} alt='#' /> Email:</p>
      <p>dummay@gmail.com</p>
    </div>
    <div className='frm-detail'>
      <p className='frm-detail-para'><img src={PhoneIcon} alt='#' /> Phone:</p>
      <p>8898743746</p>
    </div>
    <div className='frm-detail'>
      <p className='frm-detail-para address'>
      We will get back to you within
      24 hours, or call us everyday,
      09:00 AM - 05:00 PM
      </p>
    </div>
    <div className='frm-contact'>
      <img src={TelePhoneIcon} alt='#' />
      <p className='frm-contact-para'>022-500-897</p>
    </div>
  </div>
  )
}

export default FormDetails