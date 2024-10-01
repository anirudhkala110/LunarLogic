import React from 'react'
import adidas from '../Assets/Logos/LN.png'
import apple from '../Assets/Logos/BjajF.png'
import f1s from '../Assets/Logos/icicilombard.png'
import gta from '../Assets/Logos/babychakra.png'
import google from '../Assets/Logos/google.png'
import amazon from '../Assets/Logos/TOI1.png'
import TOI from '../Assets/Logos/TJ.png'
import OYO from '../Assets/Logos/wz.png'
const keyPartners = [
    { img: google, info: '' },
    { img: adidas, info: '' },
    { img: apple, info: '' },
    { img: f1s, info: '' },
    { img: gta, info: '' },
    { img: amazon, info: '' },
    { img: TOI, info: '' },
    { img: OYO, info: '' },
]
const Base4 = () => {
    return (
        <div className='py-5' id='ourClients'>
            <div className='container py-5'>
                <button className='btn fs-1' style={{ fontSize: '700' }}>Our clients</button>
                <div className='mt-2'>
                    <div className='row'>
                        {
                            keyPartners.map((data, i) => (
                                <div key={i} className='d-flex justify-content-center align-items-center col-sm-6 mb-3 col-md-3' style={{ border: '1px solid #E6E6E6' }}>
                                    <div className='logos' style={{ objectFit: 'contain', aspectRatio: '', }}>
                                        <img src={data.img} />
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

export default Base4