import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import Footer4 from './Footer4'

const Footer = () => {
  return (
    <div style={{ minWidth: "400px" }}>
      {/* <div className='p-3' style={{ background: "#034EA2" }}>
        <Footer1 />
      </div> */}
      {/* <div className='p-3' style={{ background: "#034EA2" }}>
        <Footer2 />
      </div> */}
      <div className='p-3' style={{ background: "#034EA2" }}>
        <Footer3 />
      </div>
      <div className='p-3' style={{ background: "#034289" }}>
        <Footer4 />
      </div>
      <input type='hidden' value='Created By #anirudhkala110@gmail.com'/>
    </div>
  )
}

export default Footer