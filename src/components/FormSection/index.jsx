import React from 'react'
import CustomForm from './CustomForm';
import FormDetails from './FormDetails';
import './styles.css';


const FormSection = () => {
  return (
    <section className='common-sec grid-center' id='quote'>
      <div className='frm-container'>
        <FormDetails />
        <CustomForm />
      </div>
    </section>
  )
}

export default FormSection