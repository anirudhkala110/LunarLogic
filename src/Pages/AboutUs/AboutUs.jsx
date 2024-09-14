import AboutBase1 from './AboutBase1'
import AboutLL from './AboutLL'
import './Aboutus.css'
import React from 'react'
import OurValues from './OurValues'
import Groups from './Groups'
import SpecialisedBusinessUnit from './SpecialisedBusinessUnit'
import SettingTheStage from './SettingTheStage'
import LeadershipTeamGroup from './LeadershipTeamGroup'
import Awards from './Awards'

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
            <div className='SettingTheStage bg-light py-5'>
                <SettingTheStage />
            </div>
            <div className='leaderTeamGroup bg-white py-5' id="leadershipTeamGroup">
                <LeadershipTeamGroup />
            </div>
            <div className='awards bg-light py-5' id="award">
                <Awards />
            </div>
        </div>
    )
}

export default AboutUs