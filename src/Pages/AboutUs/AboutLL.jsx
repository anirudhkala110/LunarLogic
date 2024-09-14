import React from 'react'
import over1200 from './over1200.jpg'

const AboutLL = () => {
    return (
        <div className='container bg-white py-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <p className='my-5 pt-5' style={{ color: '#007BB6' }}>ABOUT LUNAR LOGIC</p>
                    <b className='' style={{ fontSize: '30px', lineHeight: '36px' }}>
                        Over 1200 experts across four companies - LS Digital, Langoor, F1Studioz and Social Panga come together to empower your brands.
                    </b>
                    <div className='' style={{ fontSize: '21px', lineHeight: '27px' }}>
                        Welcome to Lunar Logic, where digital marketing meets creativity and technology under the moonlit sky! Our boutique agency offers a full spectrum of services, each phase designed to guide your brand through its unique journey. Whether you’re a new moon just starting out or a full moon at your peak, we have the perfect solution for you.
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <img src={over1200} style={{height:'100%',objectFit:'cover'}}/>
                </div>
            </div>
        </div>
    )
}

export default AboutLL