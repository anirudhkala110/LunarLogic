import React from 'react'
import Base1 from './Base1'
import Base2 from './Base2'
import Base3 from './Base3'
import Base4 from './Base4'
import Base5 from './Base5'
import NewLetterSignup from './NewLetterSignup'
import KeyPartners from './KeyPartners'
import Base6 from './Base6'
import TeamPage from './TeamPage'
import BenchMark from './BenchMark'
import CookieBanner from '../Utils/CookieBanner'

const HomePage = () => {
    return (
        <div>
            <div className='base1 container px-0 pt-5' id="top">
                <Base1 />
            </div>
            <div className='bg-white' id='base2'>
                <Base2 />
            </div>
            <div className='bg-light' id='base3'>
                <Base3 />
            </div>
            <div className='bg-white' id='base4'>
                <Base4 />
            </div>
            <div className='bg-light' id='base5'>
                <Base5 />
            </div>
            <div className='' id='newsLetterSignUp'>
                <NewLetterSignup />
            </div>
            {/* <div className='py-5' id='keyPartners'>
                <KeyPartners />
            </div> */}
            {/* <div className='bg-white' id='inNews'>
                <Base6 />
            </div> */}
            <div className='' id='reachOutTeam'>
                <TeamPage />
            </div>
            <div className='' id='benchmark'>
                <BenchMark />
            </div>
            <div>
                <CookieBanner />
            </div>
        </div>
    )
}

export default HomePage