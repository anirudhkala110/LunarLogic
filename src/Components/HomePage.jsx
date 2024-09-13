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

const HomePage = () => {
    return (
        <div>
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
            <div className='reachOutTeam'>
                <TeamPage />
            </div>
            <div className='benchmark'>
                <BenchMark />
            </div>
        </div>
    )
}

export default HomePage