import React from 'react'
import adidas from '../../Assets/Logos/adidas.png'
import f1s from '../../Assets/Logos/f1s.svg'
import lemma from '../../Assets/Logos/lemma.jpeg'
import TOI from '../../Assets/Logos/TOI.jpg'
const SpecialisedBusinessUnit = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-4'>
                        <div className='p-3 text-white'>
                            <b className='' style={{ fontSize: '2em', fontWeight: '700' }}>
                                Specialized Business Units
                            </b>
                            <p className='' style={{ fontSize: '1.4em', fontWeight: '600' }}>
                                With single purpose putting Digital Business Transformation at the heart of the brand.
                            </p>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-6 col-lg-2 p-3' >
                        <div className='rounded-4 p-3 text-center' style={{ background: '#004498', height: '200px' }}>
                            <center className='mb-2'>
                                <img src={f1s} style={{ objectFit: "contain", width: '100px', height: '70px' }} />
                                <p className='' style={{ fontSize: '', fontWeight: '600', color: 'white' }}>
                                    Media and Analytics Report
                                </p>
                            </center>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-2 p-3' >
                        <div className='rounded-4 p-3 text-center' style={{ background: '#004498', height: '200px' }}>
                            <center className='mb-2'>
                                <img src={adidas} style={{ objectFit: "contain", width: '100px', height: '70px' }} />
                            </center>
                            <p className='' style={{ fontSize: '', fontWeight: '600', color: 'white' }}>Customer Experience & Web 3.0 Experts</p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-2 p-3' >
                        <div className='rounded-4 p-3 text-center' style={{ background: '#004498', height: '200px' }}>
                            <center className='mb-2'>
                                <img src={lemma} style={{ objectFit: "contain", width: '100px', height: '70px' }} />
                            </center>
                            <p className='' style={{ fontSize: '', fontWeight: '600', color: 'white' }}>User Experience Experts</p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-2 p-3' >
                        <div className='rounded-4 p-3 text-center' style={{ background: '#004498', height: '200px' }}>
                            <center className='mb-2'>
                                <img src={TOI} style={{ objectFit: "contain", width: '100px', height: '70px' }} />
                            </center>
                            <p className='' style={{ fontSize: '', fontWeight: '600', color: 'white' }}>Digital- First Creative Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialisedBusinessUnit