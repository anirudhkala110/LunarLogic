import React from 'react'
import adidas from '../Assets/Logos/adidas.png'
import apple from '../Assets/Logos/apple.jpg'
import f1s from '../Assets/Logos/f1s.svg'
import gta from '../Assets/Logos/gta.png'
import flipkart from '../Assets/Logos/flipkart.png'
import google from '../Assets/Logos/google.png'
import meta from '../Assets/Logos/meta.png'
import Adobe from '../Assets/Logos/Adobe.png'
import amazon from '../Assets/Logos/amazon.png'
import TOI from '../Assets/Logos/TOI.jpg'
import OYO from '../Assets/Logos/OYO.jpg'

const keyPartners = [
    { img: google, info: '' },
    { img: adidas, info: '' },
    { img: apple, info: '' },
    { img: f1s, info: '' },
    { img: gta, info: '' },
    { img: flipkart, info: '' },
    { img: meta, info: '' },
    { img: Adobe, info: '' },
    { img: amazon, info: '' },
    { img: TOI, info: '' },
    { img: OYO, info: '' },
]
const KeyPartners = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='btn rounded-0 fs-3' style={{fontWeight:'600'}}>Our Key Partners</button>
                    <button className='btn rounded-0 btn-outline-dark'>View All Partners <i className='bi bi-arrow-right'></i></button>
                </div>
                <div>
                    <div className='row py-5'>
                        {
                            keyPartners.map((data, idx) => (
                                <div className='col-sm-12 col-md-3' key={idx} style={{ border: '1px solid #C7C8C9', borderLeft: '1px solid #C7C8C9' }}>
                                    <div className='logos' style={{ minHeight: '200px' }}>
                                        <img src={data.img} style={{mixBlendMode:''}}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyPartners