import AboutBase1 from './AboutBase1'
import AboutLL from './AboutLL'
import './Aboutus.css'
import React from 'react'
import OurValues from './OurValues'
import Groups from './Groups'

const AboutUs = () => {
    return (
        <div className='' style={{minWidth:'400px'}}>
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
        </div>
    )
}

export default AboutUs