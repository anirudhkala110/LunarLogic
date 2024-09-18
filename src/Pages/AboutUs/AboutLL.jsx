import React from 'react'
import over1200 from './over1200.jpg'

const AboutLL = () => {
    return (
        <div className='container bg-white py-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <p className='my-5 pt-5' style={{ color: '#007BB6' }}>ABOUT LUNAR LOGIC</p>
                    <b className='mb-2' style={{ fontSize: '30px', lineHeight: '36px' }}>
                        Welcome to Lunar Logic,
                    </b>
                    <div className='' style={{ fontSize: '21px', lineHeight: '27px' }}>
                        Where digital marketing meets creativity and technology under the moonlit sky! Our boutique agency offers a full spectrum of services, each phase designed to guide your brand through its unique journey. Whether you’re a new moon just starting out or a full moon at your peak, we have the perfect solution for you.
                    </div>
                    <br />
                    <div className='' style={{ fontSize: '21px', lineHeight: '27px' }}>
                        At Lunar Logic, we believe in the power of transformation. Like the moon’s phases, we evolve with the needs of our clients, providing tailored marketing strategies that shine. Our team of experts combines innovative technology with creative flair to illuminate your brand's potential. Join us on a journey through the digital cosmos and watch your business grow and glow.
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <img src={over1200} style={{ height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    )
}

export default AboutLL