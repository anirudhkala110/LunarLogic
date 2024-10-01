import React, { useState } from 'react';
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpg';
import pic4 from '../Assets/Images/pic4.jpg';
import pic5 from '../Assets/Images/pic5.jpg';
import pic6 from '../Assets/Images/pic6.jpg';
import pic7 from '../Assets/Images/pic7.jpg';
import './Base.css'

const images = [
    { img: pic5, info: 'Integrating cutting-edge martech solutions to streamline your marketing efforts.' },
    { img: pic2, info: 'BLogs, Social Media, Graphics Production and More' },
    { img: pic3, info: 'SEO & SEM. Work on Keywords, paage optimization, Campaings, Analytics Etc.' },
    { img: pic4, info: 'Partnerships and Brand Advocacy with Social Media Stategies and More' },
    { img: pic1, info: 'Reponsive and Stunning Websites. Custom Stunning Designing, UX/UI Design and Development.' },
    { img: pic6, info: 'Performance Tracking, Data Analysis, Reporting, Optimisation etc.' },
    // { img: pic7, info: 'Supercharge your digital media budget through better planning, buying & optimization.' }
];

const Base1 = () => {
    const [buttonNumber, setButtonNumber] = useState(0)
    return (
        <div className="container pt-5 px-0">
            <div className="displayAfter750px shadow pt-2">
                <div className='imgContainer'>
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <div className='imgInfo py-2 px-3' style={{ verticalAlign: '', display: `${buttonNumber == index ? '' : 'none'}` }}>
                                <b className='fs-3'>
                                    {image.info}
                                </b>
                                {/* <br /> */}
                                {/* <button className='my-4' style={{ color: '#007BB6', fontWeight: '700' }}>
                                    VIEW CASE-STUDIES &nbsp;&nbsp;<i className='bi bi-arrow-right'></i>
                                </button> */}
                            </div>
                            <img src={image.img} className='' alt={`pic${index + 1}`} style={{ width: '100%', height: '50vh', objectFit: "cover", display: `${buttonNumber == index ? '' : 'none'}` }} />
                        </div>
                    ))}
                </div>
                <div className='d-flex align-items-center justify-between' style={{ minWidth: '35px', overflowX: 'auto' }}>
                    <button className='imgChangeButtons btn rounded-0 py-3 me-1' style={{ width: 'max-content', minWidth: "200px", outline: "none", background: `${buttonNumber == 0 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 0 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(0)}>Digital Strategy & Transformation</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 me-1' style={{ width: 'max-content', minWidth: "200px", outline: "none", background: `${buttonNumber == 1 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 1 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(1)}>Marketing & Engagement</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 me-1' style={{ width: 'max-content', minWidth: "200px", outline: "none", background: `${buttonNumber == 2 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 2 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(2)}>Development & Innovation</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 me-1' style={{ width: 'max-content', minWidth: "200px", outline: "none", background: `${buttonNumber == 3 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 3 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(3)}>UX Audit & Recommendations</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 me-1' style={{ width: 'max-content', minWidth: "200px", outline: "none", background: `${buttonNumber == 4 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 4 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(4)}> Data Assessment for Customer Readiness</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 me-1' style={{ width: 'max-content', minWidth: "200px", outline: "none", background: `${buttonNumber == 5 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 5 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(5)}> Web 3.0 Strategy Services</button>
                    {/* <button className='imgChangeButtons btn rounded-0 py-3 w-100     ' style={{ outline:"none",background: `${buttonNumber == 6 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 6 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(6)}>Button 7</button> */}
                </div>
            </div>
            <div className="displayBefore750px shadow pb-1 px-3">
                <div className='imgContainer'>
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <div className='imgInfo750px pt-3 shadow px-2 my-2' style={{ display: `${buttonNumber == index ? '' : 'none'}` }}>
                                <b className='fs-3 ' style={{ display: `${buttonNumber == index ? '' : 'none'}` }}>
                                    {image.info}
                                </b>
                                <br />
                                {/* <button className='my-4' style={{ color: '#007BB6', fontWeight: '700',display: `${buttonNumber == index ? '' : 'none'}` }}>
                                    VIEW CASE-STUDIES &nbsp;&nbsp;<i className='bi bi-arrow-right'></i>
                                </button> */}
                            </div>
                            <img src={image.img} className='' alt={`pic${index + 1}`} style={{ width: '100%', height: '50vh', objectFit: "cover", display: `${buttonNumber == index ? '' : 'none'}` }} />
                        </div>
                    ))}
                </div>
                <div className='d-flex align-items-center justify-between' style={{ minWidth: '35px', overflowX: 'auto' }}>
                    <button className='imgChangeButtons btn py-3 rounded-0 me-1' style={{ width: 'max-content', outline: "none", minWidth: "200px", width: '-webkit-fill-available', height: '-webkit-fill-available', background: `${buttonNumber == 0 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 0 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(0)}>Digital Strategy & Transformation </button>
                    <button className='imgChangeButtons btn py-3 rounded-0 me-1' style={{ width: 'max-content', outline: "none", minWidth: "200px", width: '-webkit-fill-available', height: '-webkit-fill-available', background: `${buttonNumber == 1 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 1 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(1)}>Marketing & Engagement</button>
                    <button className='imgChangeButtons btn py-3 rounded-0 me-1' style={{ width: 'max-content', outline: "none", minWidth: "200px", width: '-webkit-fill-available', height: '-webkit-fill-available', background: `${buttonNumber == 2 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 2 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(2)}>Development & Innovation</button>
                    <button className='imgChangeButtons btn py-3 rounded-0 me-1' style={{ width: 'max-content', outline: "none", minWidth: "200px", width: '-webkit-fill-available', height: '-webkit-fill-available', background: `${buttonNumber == 3 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 3 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(3)}>UX Audit & Recommendations</button>
                    <button className='imgChangeButtons btn py-3 rounded-0 me-1' style={{ width: 'max-content', outline: "none", minWidth: "200px", width: '-webkit-fill-available', height: '-webkit-fill-available', background: `${buttonNumber == 4 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 4 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(4)}> Data Assessment for Customer Readiness</button>
                    <button className='imgChangeButtons btn py-3 rounded-0 me-1' style={{ width: 'max-content', outline: "none", minWidth: "200px", width: '-webkit-fill-available', height: '-webkit-fill-available', background: `${buttonNumber == 5 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 5 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(5)}> Web 3.0 Strategy Services</button>
                    {/* <button className='imgChangeButtons btn py-3 rounded-0     ' style={{outline:"none",minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 6 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 6 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(6)}>Button 7</button> */}
                </div>
            </div>
        </div>
    );
};

export default Base1;
