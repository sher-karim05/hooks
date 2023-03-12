import React, { useState } from 'react'

function RegistrationForm() {
  const [form, setform] = useState({
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'jhon@gmail.com',
    password: 'laksjdflk'
  })
    return (
    <>
    <form action="" className='form'>

      <label className='label'>
        First Name:
        <input type="text" value={form.value} placeholder="Enter your first name" onChange={e=>{
            setform({
                ...form,
                firstName: e.target.value
            })
        }}/> 
      </label>
      <label>
        Last Name:
        <input type="text" value={form.value} placeholder="Enter your last name" onChange={e=> {
            setform({
                ...form,
                lastName: e.target.value
            })
        }}/> 
      </label>
      <label>
        Email:
        <input type="email" value={form.value} placeholder="Enter your email" onChange={e=> {
            setform({
                ...form,
                email: e.target.value
            })
        }
        }/> 
      </label>
      <label>
        Password:
        <input type="password" value={form.value} placeholder="Enter your password" onChange={e=> {
            setform({
                ...form,
                password: e.target.value
            })
        }}/> 
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
        ({form.password})
      </p>
        </form>
    </>
  )
}

export default RegistrationForm
