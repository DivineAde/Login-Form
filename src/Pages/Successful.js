import React from 'react'
import thanks_img from '../assets/images/icon-thank-you.svg'
import Sidebar from './Sidebar'

function Successful() {
  return (
    <div className='Success'>
      <Sidebar />
      <div className='appreciation'>
        <img src={thanks_img} alt="thanks" />
        <h2>Thank you</h2>
        <p>Thank you for confirming your subscription we hope you have fun using our platform.If you ever need support pls feel free to email us at support@loremgaming.com</p>
      </div>
    </div>
  )
}

export default Successful