import React, { useEffect, useState } from 'react';
import adidas from '../../Assets/Logos/adidas.png';
import apple from '../../Assets/Logos/apple.jpg';
import flipkart from '../../Assets/Logos/flipkart.png';
import google from '../../Assets/Logos/google.png';
import amazon from '../../Assets/Logos/amazon.png';
import './NewSlider.css';

// List of milestones
const keyMilestones = [
    { year: 2006, employees: '50+ Employees', img: adidas, partners: [] },
    { year: 2012, employees: '100+ Employees', img: apple, partners: [] },
    { year: 2017, employees: '150+ Employees', img: google, partners: ['GMP Sales Partners', 'GA Resellers'] },
    { year: 2019, employees: '200+ Employees', img: flipkart, partners: [] },
    { year: 2020, employees: '320+ Employees', img: amazon, partners: [] },
    { year: 2006, employees: '50+ Employees', img: adidas, partners: [] },
    { year: 2012, employees: '100+ Employees', img: apple, partners: [] },
    { year: 2017, employees: '150+ Employees', img: google, partners: ['GMP Sales Partners', 'GA Resellers'] },
    { year: 2019, employees: '200+ Employees', img: flipkart, partners: [] },
    { year: 2020, employees: '320+ Employees', img: amazon, partners: [] },
];

const NewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle Next Slide
    const handleNext = () => {
        if(currentIndex <keyMilestones.length-1 )
            setCurrentIndex(currentIndex+1);
    };

    // Handle Previous Slide
    const handlePrev = () => {
        if(currentIndex > 0 )
        setCurrentIndex(currentIndex-1);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            handleNext();
        } else if (e.key === 'ArrowLeft') {
            handlePrev();
        }
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener to update width on resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(windowWidth)
    return (
        <div
            onKeyDown={handleKeyDown}
            tabIndex="0"
            style={{ outline: 'none', position: 'relative', overflow: 'hidden' }}
        >
            <div
                className="container px-0 d-flex align-items-center justify-content-between"
                style={{ minHeight: '500px', position: 'relative' }}
            >
                {/* Previous Button */}
                <button className={`m-0 previousPic`} onClick={handlePrev} disabled={currentIndex===0} style={{cursor:`${currentIndex===0?'not-allowed':'pointer'}`}}>
                    <i className="bi bi-chevron-left previousPicBtn" style={{ fontWeight: '', fontSize: '2em' }}></i>
                </button>

                {/* Slider Wrapper */}
                <div className='minWidth1000px'>
                    <div
                        className="slider-wrapper border d-flex"
                        style={{ overflow: 'hidden', width: '100%', height: '500px' }}
                    >
                        <div
                            className="slides-container mx-0"
                            style={{
                                display: 'flex',
                                width: `${keyMilestones.length * 100}%`,
                                transform: `translateX(${(40 - currentIndex * (100 / keyMilestones.length))}%)`,
                                transition: '0.5s ease-in-out',
                            }}
                        >
                            {keyMilestones.map((data, idx) => (
                                <div
                                    key={idx}
                                    className={`slide py-4 border mx-0 px-0 ${currentIndex === idx ? 'align-items-center' : 'align-items-end'}`}
                                    style={{
                                        minWidth: '250px',
                                        width: `${100 / keyMilestones.length}%`,
                                        flexShrink: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'transform 0.5s ease-in-out',
                                    }}
                                >
                                    <div className='border text-center'>
                                        <img
                                            src={data.img}
                                            alt={data.year}
                                            style={{
                                                width: currentIndex === idx ? '250px' : '25px',
                                                transition: '0.3s ease',
                                            }}
                                        />
                                        <p>{data.employees}</p>
                                        {data.partners.length > 0 && (
                                            <ul>
                                                {data.partners.map((partner, i) => (
                                                    <li key={i}>{partner}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='maxwidth1000px'>
                    {
                        keyMilestones.map((data, idx) => (
                            <div className='text-center'>
                                <p className='mb-5' style={{ transition: '.5s ease-in-out', display: `${currentIndex === idx ? 'block' : 'none'}`, fontSize: '1.5em', fontWeight: '800' }}>{data.employees}</p>
                                <div className='text-center px-5 py-3 rounded-4 shadow' style={{ width: '100%', borderLeft: "1px solid  #E2E3E4", borderRight: "1px solid #E2E3E4", borderTop: "1px solid #E2E3E4", borderBottom: `10px solid rgb(255, ${(currentIndex * 50)}, 50, 100%)`, display: `${currentIndex === idx ? 'block' : 'none'}` }}>
                                    <br />
                                    <center>
                                        <img src={data.img} style={{ height: '150px', maxWidth: '100%', width: '380px', objectFit: 'contain' }} />
                                    </center>
                                    <br />
                                    <p className='fs-4' style={{ fontWeight: '700' }}>{data.year}</p>
                                    <br />
                                    <p className='fs-4' style={{ fontWeight: '700' }}>{data.partners}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Next Button */}
                <button className="m-0 nextPic" onClick={handleNext} disabled={currentIndex===keyMilestones.length-1} style={{cursor:`${currentIndex===keyMilestones.length-1?'not-allowed':'pointer'}`}}>
                    <i className="bi bi-chevron-right nextPicBtn" style={{ fontWeight: '', fontSize: '2em' }}></i>
                </button>

                {/* Navigation Dots */}
                <div className="nav-dots" style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
                    {keyMilestones.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${currentIndex === idx ? 'active-dot' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                height: '15px',
                                width: '15px',
                                margin: '0 5px',
                                backgroundColor: currentIndex === idx ? '#000' : '#bbb',
                                borderRadius: '50%',
                                display: 'inline-block',
                                cursor: 'pointer',
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewSlider;
