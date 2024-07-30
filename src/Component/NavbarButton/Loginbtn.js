import React from 'react'
import './Cont.css'

function Loginbtn() {
  return (
    <div>
      <div className='cover'>
        <h1> login</h1>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <div className='login-btn'> login </div>
        <p className='text'>  or login using</p>
      </div>
    </div>
  )
}
export default Loginbtn
