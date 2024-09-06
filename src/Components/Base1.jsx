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
    { img: pic2, info: 'Unleash the power of communication & creative to amplify digital marketing performance.' },
    { img: pic3, info: 'Get actionable insights for better campaign design & enhanced customer lifetime value.' },
    { img: pic4, info: 'Understand your customer’s lifecycle needs, pain points & interactions with your brand.' },
    { img: pic5, info: 'Use Digital as a catalyst to build a cohesive, future-ready growth strategy.' },
    { img: pic1, info: 'Realize frictionless consumer journeys using scientific UI/UX Design techniques.' },
    { img: pic6, info: 'Navigate and keep pace with the latest trends in the digital landscape & technology..' },
    { img: pic7, info: 'Supercharge your digital media budget through better planning, buying & optimization.' }
];

const Base1 = () => {
    const [buttonNumber, setButtonNumber] = useState(0)
    return ( 
        <div className="container pt-5 px-0">
            <div className="displayAfter750px shadow pt-2">
                <div className='imgContainer'>
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <div className='imgInfo py-2' style={{ display: `${buttonNumber == index ? '' : 'none'}` }}>
                                <b className='fs-3'>
                                    {image.info}
                                </b>
                                <br />
                                <button className='my-4' style={{ color: '#007BB6', fontWeight: '700' }}>
                                    VIEW CASE-STUDIES &nbsp;&nbsp;<i className='bi bi-arrow-right'></i>
                                </button>
                            </div>
                            <img src={image.img} className='' alt={`pic${index + 1}`} style={{ width: '100%', height: '50vh', objectFit: "cover", display: `${buttonNumber == index ? '' : 'none'}` }} />
                        </div>
                    ))}
                </div>
                <div className='d-flex align-items-center justify-between' style={{ minWidth: '35px', overflowX: 'auto' }}>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100 me-1' style={{ background: `${buttonNumber == 0 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 0 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(0)}>Button 1</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100 me-1' style={{ background: `${buttonNumber == 1 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 1 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(1)}>Button 2</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100 me-1' style={{ background: `${buttonNumber == 2 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 2 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(2)}>Button 3</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100 me-1' style={{ background: `${buttonNumber == 3 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 3 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(3)}>Button 4</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100 me-1' style={{ background: `${buttonNumber == 4 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 4 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(4)}>Button 5</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100 me-1' style={{ background: `${buttonNumber == 5 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 5 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(5)}>Button 6</button>
                    <button className='imgChangeButtons btn rounded-0 py-3 w-100     ' style={{ background: `${buttonNumber == 6 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 6 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(6)}>Button 7</button>
                </div>
            </div>
            <div className="displayBefore750px shadow pb-1">
                <div className='imgContainer'>
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <div className='imgInfo750px pt-3 shadow  my-2' style={{ display: `${buttonNumber == index ? '' : 'none'}` }}>
                                <b className='fs-3' style={{display: `${buttonNumber == index ? '' : 'none'}`}}>
                                    {image.info}
                                </b>
                                <br />
                                <button className='my-4' style={{ color: '#007BB6', fontWeight: '700',display: `${buttonNumber == index ? '' : 'none'}` }}>
                                    VIEW CASE-STUDIES &nbsp;&nbsp;<i className='bi bi-arrow-right'></i>
                                </button>
                            </div>
                            <img src={image.img} className='' alt={`pic${index + 1}`} style={{ width: '100%', height: '50vh', objectFit: "cover", display: `${buttonNumber == index ? '' : 'none'}` }} />
                        </div>
                    ))}
                </div>
                <div className='d-flex align-items-center justify-between' style={{ minWidth: '35px', overflowX: 'auto' }}>
                    <button className='imgChangeButtons btn rounded-0 me-1' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 0 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 0 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(0)}>Button 1</button>
                    <button className='imgChangeButtons btn rounded-0 me-1' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 1 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 1 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(1)}>Button 2</button>
                    <button className='imgChangeButtons btn rounded-0 me-1' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 2 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 2 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(2)}>Button 3</button>
                    <button className='imgChangeButtons btn rounded-0 me-1' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 3 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 3 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(3)}>Button 4</button>
                    <button className='imgChangeButtons btn rounded-0 me-1' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 4 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 4 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(4)}>Button 5</button>
                    <button className='imgChangeButtons btn rounded-0 me-1' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 5 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 5 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(5)}>Button 6</button>
                    <button className='imgChangeButtons btn rounded-0     ' style={{minWidth:"150px",width:'-webkit-fill-available',background: `${buttonNumber == 6 ? "#034EA2" : '#F2F2F3'}`, color: `${buttonNumber == 6 ? "#F2F2F3" : "#034EA2"}` }} onClick={e => setButtonNumber(6)}>Button 7</button>
                </div>
            </div>
        </div>
    );
};

export default Base1;
