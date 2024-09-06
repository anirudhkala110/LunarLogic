import React from 'react'
import Navbar from './Utils/Navbar'
import Base1 from './Components/Base1'
import Base2 from './Components/Base2'
import Base3 from './Components/Base3'
import Base4 from './Components/Base4'
import Base5 from './Components/Base5'
import NewLetterSignup from './Components/NewLetterSignup'
import KeyPartners from './Components/KeyPartners'
import Base6 from './Components/Base6'

const LandingPage = () => {
    return (
        <div className=''>
            <div className='container'>
                <Navbar />
            </div>
            <div className='base1 container px-0 pt-5'>
                <Base1 />
            </div>
            <div className='base2 bg-white'>
                <Base2 />
            </div>
            <div className='base3 bg-light'>
                <Base3 />
            </div>
            <div className='base4 bg-white'>
                <Base4 />
            </div>
            <div className='base5 bg-light'>
                <Base5 />
            </div>
            <div className='newsLetterSignUp '>
                <NewLetterSignup />
            </div>
            <div className='keyPartners'>
                <KeyPartners />
            </div>
            <div className='inNews bg-white'>
                <Base6 />
            </div>
        </div>
    )
}

export default LandingPage