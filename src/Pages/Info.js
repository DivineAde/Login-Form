import React from 'react'
import Sidebar from './Sidebar'
import { NavLink,Link } from 'react-router-dom'
import Bottom from './Bottom'

function Info() {
  return (
    <div className='info-con'>
    <Sidebar />
    <div className='Info'>
      <h1>Personal Info</h1>
      <p className='opacity'>Please provide your name, email and phone number.</p>
      <form className='form'>
        <label htmlFor="name">Name</label>
        <input type='text' placeholder='eg Divine Adeyeye'/>

        <label htmlFor="email">E-mail</label>
        <input type='email' placeholder='eg example@gmail.com'/>

        <label htmlFor="name">Phone</label>
        <input type='number' placeholder='eg +234 817737661'/>
      </form>

      
      <div className='links'>
         <NavLink to="/" className="back_info">
          Go back
         </NavLink>

         <NavLink to="/plan" className="nxt">
          Next
         </NavLink>
      </div>
    </div>



    <div className='bottom-bar'>
        <div className='ooo'>
          <div>
           <Link to='/' className='btn-gn'>Go back</Link>
          </div>
          <div>
           <Link to="/plan" className='btn-n'>Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info