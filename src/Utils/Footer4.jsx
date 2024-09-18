import React from 'react'

const Footer4 = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <p className='fs-5 fw-semibold' style={{ color: '#B3E6FF' }}>Follow us on</p>
                    <span className='d-flex align-items-center'>
                        <i className='me-4 fs-5 text-white bi bi-linkedin'></i>
                        <i className='me-4 fs-2 text-white bi bi-youtube'></i>
                        <i className='me-4 fs-5 text-white bi bi-instagram'></i>
                        <i className='me-4 fs-5 text-white bi bi-facebook'></i>
                    </span>
                </div>
                <div className='col-6 text-end'>
                    <p className='fw-semibold mb-3' style={{ color: '#B3E6FF' }}>Job Enquiry:</p>
                    <p className='fw-semibold mb-3' style={{ color: '#B3E6FF' }}>We are hiring! Apply Now</p>
                    <p className='fw-semibold mb-3 text-decoration-underline' style={{ color: '#B3E6FF' }}><a href='#'>careers@lunarlogic.com</a></p>
                    <p className='fw-semibold mb-3' style={{ color: '#B3E6FF' }}><a href='#'>Lunar Logic <sup><i className='bi bi-c-circle'></i></sup> 2024 Copyright LL</a></p>
                    <input type='hidden' value='Created By #anirudhkala110@gmail.com'/>
                </div>
            </div>
        </div>
    )
}

export default Footer4