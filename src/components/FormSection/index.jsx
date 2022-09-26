import React, { useState, useCallback } from 'react';
import CustomForm from './CustomForm';
import FormDetails from './FormDetails';
import './styles.css';


const FormSection = () => {

  const [frmValues, setFrmValues] = useState({
    name: '',
    email: '',
    contact: '',
    type: 'Type of Event',
    date: '',
    requirements: ''
  })

  const [validations, setValidations] = useState({})

  const onInputChange = useCallback((eve) =>{
    const {name, value} = eve.target;
    setFrmValues(prev => {
      return {...prev, [name]:value}
    })
  }, [])

  const validate = frmData =>{
    const validations = {}

    // eslint-disable-next-line no-useless-escape
    const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validPhone = /^[0-9]*$/;

    if(!frmData.name){
      validations.name = "Error: This is mendatory field";
    }
    if(frmData.type === 'Type of Event'){
      validations.type = "Error: This is mendatory field";
    }
    if(!frmData.date){
      validations.date = "Error: This is mendatory field";
    }

    if(!frmData.email){
      validations.email = "Error: This is mendatory field";
    }else if(!validMail.test(frmData.email)){
      validations.email = "Error: Email is not valid!";
    }

    if(!frmData.contact){
      validations.contact = "Error: This is mendatory field";
    }else if(frmData.contact.length !== 10 || !validPhone.test(frmData.contact)){
      validations.contact = "Error: Phone number is not valid!";
    }
    return validations

  }

  const handleSubmit = useCallback((eve) => {
    eve.preventDefault();
    const errors = validate(frmValues)
    setValidations(errors)
  }, [frmValues])

  return (
    <section className='common-sec grid-center' id='quote'>
      <div className='frm-container'>
        <FormDetails />
        <CustomForm frmValues={frmValues} onInputChange={onInputChange} handleSubmit={handleSubmit} validations={validations} />
      </div>
    </section>
  )
}

export default FormSection