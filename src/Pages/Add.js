import React from 'react'
import Sidebar from './Sidebar'
import { NavLink,Link } from 'react-router-dom'

function Add() {
  return (
    <div className='Add_on'>
      <Sidebar />
      <div className='add'>
        <h1>Pick your add-ons</h1>
        <p className='opacity'>Add-ons help enhance your gaming experience.</p>

        <div className='add_container'>
          <div className='pick_one'>
            <div>
             <input type="checkbox" id='check'/>
            </div>
            <div className='add_skills'>
              <p className='online'>Online gaming</p>
              <p className='opacity'>Enhance your multiplayer</p>
            </div>
            <div>
             <span>+1$/mon</span>
            </div>
          </div>

          <div className='pick_one'>
            <div>
             <input type="checkbox" id='check'/>
            </div>
            <div className='add_skills'>
              <p className='online'>Online gaming</p>
              <p className='opacity'>Enhance your multiplayer</p>
            </div>
            <div>
             <span>+1$/mon</span>
            </div>
          </div>

          <div className='pick_one'>
            <div>
             <input type="checkbox" id='check'/>
            </div>
            <div className='add_skills'>
              <p className='online'>Online gaming</p>
              <p className='opacity'>Enhance your multiplayer</p>
            </div>
            <div>
             <span>+1$/mon</span>
            </div>
          </div>
        </div>

        <div className='links'>
         <NavLink to="/plan" className="back">
          Go back
         </NavLink>

         <NavLink to="/summary" className="nxt">
          Next
         </NavLink>
        </div>
      </div>


      <div className='bottom-bar'>
        <div className='ooo'>
          <div>
           <Link to='/' className='btn-g'>Go back</Link>
          </div>
          <div>
           <Link to='/summary' className='btn-n'>Next</Link>
          </div>
        </div>
      </div>
    </div>
  )

  
}

export default Add