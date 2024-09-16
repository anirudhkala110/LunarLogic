import React from 'react'
import OurJourneySlider from './OurJourneySlider'
import NewSlider from './NewSlider'

const Groups = () => {
    return (
        <div className='py-5'>
            <div style={{ background: '#034EA2' }} className='pt-5 fw-bold text-white'>
                <center className='mt-5' style={{ fontWeight: '300' }}>WHAT WE TRANSFORM</center>
                <center style={{ fontSize: '40px' }}>We are a group</center>
                <div className='row pt-5 pb-2 col-12 px-3'>
                    <div className='col-sm-6 col-md-3' style={{ height: '200px' }}>
                        <center style={{ fontSize: '38px' }}><b>1200+</b></center>
                        <center style={{ fontSize: '24px' }}><b>People</b></center>
                        <center style={{ fontSize: '16px', fontWeight: '300' }}>Business Professionals</center>
                    </div>
                    <div className='col-sm-6 col-md-3' style={{ height: '200px' }}>
                        <center style={{ fontSize: '38px' }}><b>250+</b></center>
                        <center style={{ fontSize: '24px' }}><b>Recognition</b></center>
                        <center style={{ fontSize: '16px', fontWeight: '300' }}>Accross Award Categories</center>
                    </div>
                    <div className='col-sm-6 col-md-3' style={{ height: '200px' }}>
                        <center style={{ fontSize: '38px' }}><b>500+</b></center>
                        <center style={{ fontSize: '24px' }}><b>Businesses</b></center>
                        <center style={{ fontSize: '16px', fontWeight: '300' }}>Accross industries</center>
                    </div>
                    <div className='col-sm-6 col-md-3' style={{ height: '200px' }}>
                        <center style={{ fontSize: '38px' }}><b>5</b></center>
                        <center style={{ fontSize: '24px' }}><b>Geographies</b></center>
                        <center style={{ fontSize: '16px', fontWeight: '300' }}>With 13 established offices</center>
                    </div>
                </div>
            </div>
            <div>
                <center className='mt-5' style={{ fontWeight: '300', color: '#007BB6' }}>BUSINESS ROADMAP</center>
                <center className='' style={{ fontWeight: '', fontSize: '40px' }}>Our Journey</center>
                <center style={{ fontSize: '22px' }}>Building India’s first Digital Marketing Transformation Network for the world</center>
            </div>
            {/* <div className='my-3'>
                <OurJourneySlider />
            </div> */}
            <div className='my-3'>
                <NewSlider />
            </div>
        </div>
    )
}

export default Groups