import React from 'react'
import Sidebar from './Sidebar'
import arcade from '../assets/images/icon-arcade.svg'
import { NavLink,Link } from 'react-router-dom';

import Bottom from './Bottom'

function Plan() {
  return (
    <div className='Plan'>
      <Sidebar />
      <div className='brainstorm'>
        <h1>Select your plan</h1>
        <p className='opacity'>You have the option of monthly bill and yearly billings</p>
        <div className='cards'>
          <div className='arcade'>
            <div>
             <img src={arcade} />
            </div>
            <div className='type'>
              <h3>Arcade</h3>
              <span>$9/mon</span>
            </div>
          </div>

          <div className='arcade'>
            <div>
             <img src={arcade} />
            </div>
            <div className='type'>
              <h3>Arcade</h3>
              <span>$9/mon</span>
            </div>
          </div>

          <div className='arcade'>
            <div>
             <img src={arcade} />
            </div>
            <div className='type'>
              <h3>Arcade</h3>
              <span>$9/mon</span>
            </div>
          </div>
        </div>

        <div className='middle'>
          <div>
          <label htmlFor='monthly'>Monthly</label>
          </div>
         
         <div>
          <label>
           <input type="checkbox" id="switch"/>
           <span className="slider"></span>
          </label>
         </div>

         <div>
          <label htmlFor='yearly'>yearly</label>
         </div>
        </div>

        <div className='links'>
         <NavLink to="/" className="back">
          Go back
         </NavLink>

         <NavLink to="/add" className="nxt">
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
           <Link to="/add" className='btn-n'>Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan