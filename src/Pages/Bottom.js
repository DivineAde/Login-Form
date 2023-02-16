import React from 'react'
import { Link } from 'react-router-dom'

function Bottom() {
  return (
    <>
      <div className='bottom-bar'>
        <div className='ooo'>
          <div>
           <Link to='/' className='btn-g'>Go back</Link>
          </div>
          <div>
           <Link href='#' className='btn-n'>Next</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bottom