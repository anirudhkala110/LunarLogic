import React from 'react'
import adidas from '../Assets/Logos/adidas.png'
import apple from '../Assets/Logos/apple.jpg'
import f1s from '../Assets/Logos/f1s.svg'
import gta from '../Assets/Logos/gta.png'

const Base2 = () => {
    return (
        <div className='container py-4 px-0'>
            <div>
                <div className='row py-4 px-0'>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <b style={{ fontSize: '25px' }}>Lunar Logic - Illuminating Your Digital Path</b>
                        <hr />
                        <br />
                        <p>Welcome to Lunar Logic, where digital marketing meets creativity and technology under the moonlit sky! Our boutique agency offers a full spectrum of services, each phase designed to guide your brand through its unique journey. Whether you’re a new moon just starting out or a full moon at your peak, we have the perfect solution for you.</p>
                        <button className='fs-5 my-3 fw-semibold' style={{ color: "#007BB6" }}>KNOW MORE &nbsp;&nbsp; <i className='bi bi-arrow-right'></i></button>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        {/* <video src='https://www.youtube.com/watch?v=fzWzPXEhPvA' width={600} height={400}/> */}
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/fzWzPXEhPvA?si=lHHD620e0aXdLIjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <hr />
                <br />
                
            </div>
            <div className='row px-3'>
                    <div className=' d-flex justify-center col-sm-12 col-md-3' style={{ borderRight: '1px solid #C7C8C9',borderLeft: '1px solid #C7C8C9' }}>
                        <div className='logos' style={{ minHeight: '200px' }}>
                            <img src={adidas}/>
                            <p>This is the description or any other part of this division so that anyone can write something about the logo or any thing related to these logo.</p>
                        </div>
                    </div>
                    <div className=' d-flex justify-center col-sm-12 col-md-3' style={{ borderRight: '1px solid #C7C8C9',borderLeft: '1px solid #C7C8C9' }}>
                        <div className='logos' style={{ minHeight: '200px' }}>
                            <img  src={apple}/>
                            <p>This is the description or any other part of this division so that anyone can write something about the logo or any thing related to these logo.</p>
                        </div>
                    </div>
                    <div className=' d-flex justify-center col-sm-12 col-md-3' style={{ borderRight: '1px solid #C7C8C9',borderLeft: '1px solid #C7C8C9' }}>
                        <div className='logos' style={{ minHeight: '200px' }}>
                            <img src={f1s}/>
                            <p>This is the description or any other part of this division so that anyone can write something about the logo or any thing related to these logo.</p>
                        </div>
                    </div>
                    <div className=' d-flex justify-center col-sm-12 col-md-3' style={{ borderRight: '1px solid #C7C8C9',borderLeft: '1px solid #C7C8C9' }}>
                        <div className='logos' style={{ minHeight: '200px' }}>
                            <img src={gta}/>
                            <p>This is the description or any other part of this division so that anyone can write something about the logo or any thing related to these logo.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Base2