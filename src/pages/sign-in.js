import React from 'react'
import Form from '../components/styled/blocks/Form'

const SignIn = () => {


  //* Example of an override of the original onSubmit which also just logs the form data to the console
  const onSubmitHandler = (form, callback) => {
    console.log(form)
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', height: 100 +'vh', alignItems: 'center', background: 'white'}}> 
    <div className='form-wrapper'>
      <Form onSubmit={onSubmitHandler} />
    </div>
    </div>
  )
}

export default SignIn
