import React from 'react'
import over1200 from './over1200.jpg'
import invertedCommas from './invertedCommas.png'

const SettingTheStage = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <img src={over1200} className='rounded-bottom-4' style={{ height: '100%', objectFit: 'cover' }} />
                        <div className='w-100 py-2 ps-5 rounded-bottom-4'   style={{boxShadow:'',position:'relative',zIndex:'200',marginTop:'-70px', background:'black', color:'white'}}>
                            <span style={{fontSize:'1.3em',fontWeight:'800'}}>Prasad Shejale</span>
                            <p>Eounded $ CEO</p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-8'>
                        <div>
                            <img src={invertedCommas} style={{ transform: 'rotateZ(180deg)', width: '50px', filter: 'invert(27%) sepia(100%) saturate(678%) hue-rotate(159deg) brightness(98%) contrast(101%)' }} />
                            <p className='' style={{ fontSize: "1.3em", fontWeight: '700', lineHeight: '32px' }}>We are setting the stage to becoming a leader in the global digital landscape by enabling and accelerating the digital business transformation journey of our brands, helping them stay relevant to their ever-changing, digitally-enabled consumers.</p>
                            <p className='' style={{ fontSize: "", fontWeight: '400', lineHeight: '32px' }}>
                                Digital is one of the most critical touch points, and many brands are struggling to look at it as a catalyst instead of just yet another channel. Consumer journeys are getting redefined based on the digital touch points. We at LS Digital, assist brands accentuate their digital journey across Media, UI/UX, Creative & communication, Data & Insights, CX and Tech & Innovations, through our committed and skilled team of experts and an in-house, state of art Digital Business Transformation framework.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingTheStage