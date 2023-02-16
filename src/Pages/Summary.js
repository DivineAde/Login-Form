import React from 'react'
import Sidebar from './Sidebar'
import { NavLink,Link } from 'react-router-dom'

function Summary() {
  return (
    <div className='Summary'>
      <Sidebar />

      <div className='finishing'>
        <h1>Finishing Up</h1>
        <span className='opacity'>Double-check everything looks Ok before confirming.</span>

        <div className='summary_container'>
          <div className='arcade_summary'>
            <div className='para'>
              <span className='bold_arcade'>Arcade Monthly</span>
              <span className='opacity'>change</span>
            </div>
            <span className='bold_arcade'>$9/mo</span>
          </div>

          <div className='online_summary'>
            <span className='online_service'>Online Service</span>
            <span>+$1/mo</span>
          </div>

          <div className='online_summary'>
            <span className='online_service'>Large storage</span>
            <span>+$2/mo</span>
          </div>
        </div>

        <div className='total'>
          <span className='sum_total'>Total(per month)</span>
          <span className='amount'>+$12/mo</span>
        </div>
        <div className='links'>
         <NavLink to="/" className="no_back">
          Go back
         </NavLink>

         <NavLink to="/successful" className="nxt">
          Confirm
         </NavLink>
        </div>
      </div>


      <div className='bottom-bar'>
        <div className='ooo'>
          <div>
           <Link to='/plan' className='btn-g'>Go back</Link>
          </div>
          <div>
           <Link to='/successful' className='btn-n'>Confirm</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary