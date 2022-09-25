import React from 'react'
import SendIcon from '../../assets/images/icons/send-icon.png';

const CustomForm = () => {
  return (
    <div className='frm-sec'>
    <h1 className='frm-title'>Request A Quote</h1>
    <form className='frm'>
      <div className='frm-row'>
        <div className='frm-item'>
          <input 
          className='frm-inp'
          type='text'
          placeholder='Enter Name'
          />
          {/* <p className='frm-warning'>Only numbers</p> */}
        </div>
        <div className='frm-item'>
         <input 
         className='frm-inp'
          type='email'
          placeholder='Enter Email'
          />
          {/* <p className='frm-warning'>Only numbers</p> */}
        </div>
        <div className='frm-item'>
         <input 
         className='frm-inp'
          type='text'
          placeholder='Enter Contact'
          />
          {/* <p className='frm-warning'>only numbers</p> */}
        </div>
      </div>
      <div className='frm-row'>
        <select className='frm-dif-inp w-50'>
          <option defaultValue='Type of Event'>Type of Event</option>
          <option>Annivarsery</option>
          <option>Birthday</option>
          <option>Babyshower</option>
        </select>
        <input
          className='frm-dif-inp  w-50'
          type='date'
          placeholder='Date of Event'
        />
      </div>
      <div className='frm-row'>
        <textarea className='frm-area' rows={10} placeholder='Special Requirements'  />
      </div>
      <div className='frm-row right-align'>
        <button type='submit' className='sub-btn'> 
          <img src={SendIcon} alt='#' />
          Send 
        </button>
      </div>
    </form>
</div>
  )
}

export default CustomForm