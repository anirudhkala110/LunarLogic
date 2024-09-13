import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'

const Footer = () => {
  return (
    <div>
      <div className='p-3'>
        <Footer1 />
      </div>
      <div className='p-3'>
        <Footer2 />
      </div>
      <div className='p-3'>
        <Footer3 />
      </div>
    </div>
  )
}

export default Footer