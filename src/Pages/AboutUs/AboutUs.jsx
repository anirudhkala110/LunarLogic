import AboutBase1 from './AboutBase1'
import AboutLL from './AboutLL'
import './Aboutus.css'
import React from 'react'
import OurValues from './OurValues'
import Groups from './Groups'
import SpecialisedBusinessUnit from './SpecialisedBusinessUnit'

const AboutUs = () => {
    return (
        <div className='' style={{ minWidth: '400px' }}>
            <div className='aboutbase1'>
                <AboutBase1 />
            </div>
            <div className='aboutLL bg-white py-5' id="aboutLL">
                <AboutLL />
            </div>
            <div className='values bg-light py-5' id="values">
                <OurValues />
            </div>
            <div className='groups bg-light py-5' id="groups">
                <Groups />
            </div>
            <div className='SpecialisedBusinessUnit py-5' style={{ background: '#034EA2' }} id="groups">
                <SpecialisedBusinessUnit />
            </div>
        </div>
    )
}

export default AboutUs