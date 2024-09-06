import React from 'react'
import Navbar from './Utils/Navbar'
import Base1 from './Components/Base1'
import Base2 from './Components/Base2'
import Base3 from './Components/Base3'

const LandingPage = () => {
    return (
        <div className=''>
            <div className='base1 container'>
                <Base1 />
            </div>
            <div className='base2 bg-white'>
                <Base2 />
            </div>
            <div className='base3 bg-white'>
                <Base3 />
            </div>
        </div>
    )
}

export default LandingPage