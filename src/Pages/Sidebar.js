import React from 'react'
import bg_img from '../assets/images/bg-sidebar-desktop.svg'
import {NavLink} from "react-router-dom"
import mobile_nav from "../assets/images/bg-sidebar-mobile.svg"
import styled from "styled-components";


const linkStyle = {
  textDecoration: "none",
};

const activeStyle = {
  fontWeight: "bold"
};

function Sidebar() {
  return (
    <div className='Sidebar'>
      <img src={bg_img} alt="backround" className='bg'/>
      <img src={mobile_nav} alt='mobile_nav' className='mobile_nav'/>
      <div className='mobile_page'>
        <span className='num'>1</span>
        <span className='num'>2</span>
        <span className='num'>3</span>
        <span className='num'>4</span>
      </div>
      <div className='image_text'>
      <NavLink to='/' exact="true"  /*className={({ isActive }) => (isActive ? "link-active" : "link")}*/ activeclassname="active">
        <div className='page_one'>
          <span className='num'>1</span>
          <div className='step'>
            <span className='move'>STEP 1</span>
            <span className='pick'>YOUR INFO</span>
          </div>
        </div>
      </NavLink>

      <NavLink to='/plan' activeclassname="active" /*className={({ isActive }) => (isActive ? "link-active" : "link")}*/>
        <div className='page_one'>
          <span className='num'>2</span>
          <div className='step'>
            <span className='move'>STEP 2</span>
            <span className='pick'>SELECT PLAN</span>
          </div>
        </div>
      </NavLink>

      <NavLink to='/add' activeclassname="active"/*className={({ isActive }) => (isActive ? "link-active" : "link")}*/>
        <div className='page_one'>
          <span className='num'>3</span>
          <div className='step'>
            <span className='move'>Step 3</span>
            <span className='pick'>ADD ONS</span>
          </div>
        </div>
      </NavLink>

      <NavLink to='/summary' activeclassname="active"/*className={({ isActive }) => (isActive ? "link-active" : "link")}*/>
        <div className='page_one'>
          <span className='num'>4</span>
          <div className='step'>
            <span className='move'>STEP 4</span>
            <span className='pick'>SUMMARY</span>
          </div>
        </div>
      </NavLink>
      </div>
    </div>
  )
}

export default Sidebar