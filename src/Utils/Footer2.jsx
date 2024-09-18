import React from 'react'

const Footer2 = () => {
    return (
        <div className='container'>
            <div className='row col-12'>
                <div className='col-4 px-2'>
                    <p className='text-uppercase text-white fw-semibold mb-2' id='jobOpening'>Our Work</p>
                    <div>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Creative Portfolio</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Case Study</a></p>
                    </div>
                </div>
                <div className='col-4 px-2'>
                    <p className='text-uppercase text-white fw-semibold mb-2'>Media</p>
                    <div>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Blogs</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>News</a></p>
                    </div>
                </div>
                <div className='col-4 px-2'>
                    <p className='text-uppercase text-white mb-2 fw-semibold'>Located At</p>
                    <div>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Navi Mumbai</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Mumbai</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Gurugram</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Bengaluru</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>Dubai</a></p>
                        <p className='text-white-50' style={{ marginBottom: '10px' }}><a href='#' className='text-decoration-none'>United Kingdom</a></p>
                    </div>
                </div>
                <div className='col-12 text-start'>
                    <p className='text-uppercase text-white mb-2 fw-semibold'><a href='#' className='text-decoration-none'>Job Openings</a></p>
                </div>
                <input type='hidden' value='Created By Anirudh Kala, #anirudhkala110@gmail.com '/>
            </div>
        </div>
    )
}

export default Footer2