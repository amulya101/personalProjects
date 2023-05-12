import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

export const SingleMemory= ({data}) => {

  const [contactInfo, setEmail] = useState({
    email: ''
  })

  const handleChange = (e) => {
    setEmail({...contactInfo, [e.target.name]: e.target.value})
  } 

  const emailOutput = contactInfo.email;

  const onSubmit = (e) => {
    e.preventDefault();
    
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailOutput.match(validRegex)){
      alert(`We will contact you at ${emailOutput}`)
    } else {
      alert('Enter correct email')
    }

  }
  return (
    <div>
        <h2>{data.title}</h2>
        <Image width={300} height={300} src={data.image} alt={data.title} />
        <p>{data.description}</p>

        <form onSubmit={onSubmit}>
          <input className='email-txt' placeholder='e-mail' type='text' name='email' onChange={handleChange} value={contactInfo.email}/>

          <button type='submit'>Submit</button>
          
        </form >
        
        
        
    </div>
  )
}
