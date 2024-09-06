import React from 'react'
import adidas from '../Assets/Logos/adidas.png'
import apple from '../Assets/Logos/apple.jpg'
import f1s from '../Assets/Logos/f1s.svg'
import gta from '../Assets/Logos/gta.png'
const Base4 = () => {
    const repeater = [0, 1]
    return (
        <div>
            <div className='container py-5'>
                <button className='btn fs-1' style={{fontSize:'700'}}>Our clients</button>
                <div>
                    {
                        repeater.map(i => (
                            <div className='row' key={i}>
                                <div className='d-flex justify-content-center align-items-center col-sm-6 mb-3 col-md-3' style={{border:'1px solid #E6E6E6'}}>
                                    <div className='logos' style={{ objectFit: 'contain', aspectRatio: '', }}>
                                        <img src={adidas} />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center col-sm-6 mb-3 col-md-3' style={{border:'1px solid #E6E6E6'}}>
                                    <div className='logos' style={{ objectFit: 'contain', aspectRatio: '', }}>
                                        <img src={apple} />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center col-sm-6 mb-3 col-md-3' style={{border:'1px solid #E6E6E6'}}>
                                    <div className='logos' style={{ objectFit: 'contain', aspectRatio: '', }}>
                                        <img src={f1s} />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center col-sm-6 mb-3 col-md-3' style={{border:'1px solid #E6E6E6'}}>
                                    <div className='logos' style={{ objectFit: 'contain', aspectRatio: '', }}>
                                        <img src={gta} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Base4