import React, { useState } from 'react';
import adidas from '../Assets/Logos/adidas.png';
import apple from '../Assets/Logos/apple.jpg';
import f1s from '../Assets/Logos/f1s.svg';
import gta from '../Assets/Logos/gta.png';
import flipkart from '../Assets/Logos/flipkart.png';
import google from '../Assets/Logos/google.png';
import meta from '../Assets/Logos/meta.png';
import Adobe from '../Assets/Logos/Adobe.png';
import amazon from '../Assets/Logos/amazon.png';
import TOI from '../Assets/Logos/TOI.jpg';
import OYO from '../Assets/Logos/OYO.jpg';

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
];

const Base6 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesPerView = 2; // Number of images to show at a time

    const handleNext = () => {
        if (currentIndex < keyPartners.length - imagesPerView) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <div className="container py-3">
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='btn rounded-0 fs-3' style={{ fontWeight: '700' }}>Lunar Logic in the NEWS</button>
                    <button className='btn rounded-0 btn-outline-dark'>VIEW ALL NEWS <i className='bi bi-arrow-right'></i></button>
                </div>
                <div className="py-4">
                    <div className='imageChangerButtons d-flex justify-content-between align-items-center'>
                        <button
                            className="btn rounded-circle text-white border-0 me-2 prev"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            style={{background:`${currentIndex === 0?'#001ab5a6':'#034EA2'}`}}
                            
                        >
                            <i className='bi bi-arrow-left fs-2 ' style={{fontWeight:'700',filter:'drop-shadow(0px 0px 1px black)'}}></i>
                        </button>
                        <div className="slider-container" style={{ overflow: 'hidden', width: '100%' }}>
                            <div
                                className="keyPartnersImage shadow"
                                style={{
                                    display: 'flex',
                                    alignItems:'center',
                                    transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)`,
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                {keyPartners.map((partner, index) => (
                                    <div key={index} className='' style={{ flex: '0 0 50%', maxWidth: '50%' }}>
                                        <img
                                            src={partner.img}
                                            alt="Partner Logo"
                                            className="img-fluid"
                                            style={{ height: '300px', maxWidth:'540px', width: '100%', objectFit: 'contain' }}
                                        />
                                        <div className='fs-4' style={{fontWeight:'600'}}>
                                            Info regarding news and any other confrences.
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            className="btn border-0 rounded-circle text-white next"
                            onClick={handleNext}
                            style={{background:`${currentIndex===keyPartners.length-1?'#001ab5a6':'#034EA2'}`}}
                            disabled={currentIndex >= keyPartners.length - imagesPerView}
                        >
                           <i className='bi bi-arrow-right fs-2 ' style={{fontWeight:'700',filter:'drop-shadow(0px 0px 1px black)'}}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Base6;
