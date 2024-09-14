import React, { useState } from 'react';
import pic1 from '../../Assets/Images/pic1.jpg';
import pic2 from '../../Assets/Images/pic2.jpg';
import pic3 from '../../Assets/Images/pic3.jpg';
import pic4 from '../../Assets/Images/pic4.jpg';
import pic5 from '../../Assets/Images/pic5.jpg';
import pic6 from '../../Assets/Images/pic6.jpg';
import pic7 from '../../Assets/Images/pic7.jpg';
const array = [
    { img: pic2, event: 'e4m Media Ace Awards 2022', content: "Lunar Logic won Frontbencher 2021 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
    { img: pic3, event: 'DIGIXX (Adgully) 2022', content: "Lunar Logic won Frontbencher 2021 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
    { img: pic1, event: 'DigiXX 2022', content: "Lunar Logic won Digixx 2022 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
    { img: pic4, event: 'Frontbenchers 2021', content: "Lunar Logic won Frontbencher 2021 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
    { img: pic5, event: 'Digital Awards', content: "Lunar Logic won Frontbencher 2021 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
    { img: pic6, event: 'Datamatrixx 2022', content: "Lunar Logic won Frontbencher 2021 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
    { img: pic7, event: 'The Great India Marketing Awards', content: "Lunar Logic won Frontbencher 2021 award for mankind Pharma's social Campaign <b>#Sshnotok</b> under the viral marketing category." },
]

const Awards = () => {
    // Initialize the array with 10 items
    // const array = Array.from({ length: 10 }, (_, index) => index);

    // State to track the current index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [discIndex, setDescIndex] = useState(0)

    // Previous button click handler
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        if (discIndex > 0) {
            setDescIndex(discIndex - 1)
        }
    };

    // Next button click handler
    const handleNext = () => {
        if (currentIndex < array.length - 1) {  // 3 items per view
            setCurrentIndex(currentIndex + 1);
        }
        if (discIndex < array.length - 1) {
            setDescIndex(discIndex + 1)
        }
    };
    const hanldeIndexs=(idx)=>{
        setCurrentIndex(idx);
        setDescIndex(idx)
    }

    // Total width of each item including the margins
    const itemWidthWithMargin = 350 + 40;

    return (
        <div className='py-5'>
            <div className='py-2'>
                <center className='' style={{ fontSize: '1.5em', fontWeight: '600' }}>Awards We Won</center>
                <div className='d-flex align-items-center justify-content-around py-5'>
                    <button className='prev' onClick={handlePrev} disabled={currentIndex === 0}>
                        <i className='bi bi-chevron-left'></i>
                    </button>
                    <div className='d-flex align-items-center overflow-hidden' style={{ width: `${itemWidthWithMargin * 3}px` }}>
                        <div
                            className='d-flex'
                            style={{
                                transform: `translateX(-${currentIndex * itemWidthWithMargin}px)`,
                                transition: 'transform 0.5s ease-in-out',
                                width: `${array.length * itemWidthWithMargin}px`, // Total width of all items including margin
                            }}
                        >
                            {array.map((data, idx) => (
                                <div
                                    key={idx}
                                    className='d-flex border align-items-center justify-content-center'
                                    style={{
                                        minWidth: '350px',
                                        minHeight: '450px',
                                        marginLeft: '20px',
                                        paddingLeft: '20px',
                                        paddingRight: '20px',
                                        marginRight: '20px',
                                        background: 'white',
                                        // background: '#F3F4F7',
                                        transition: 'opacity 0.5s ease', // Smooth opacity change
                                    }}
                                >
                                    <div className='text-center'>
                                        <center><img src={data.img} style={{ width: '150px', height: '150px', objectFit: 'cover' }} /></center>
                                        <br />
                                        <b className='' style={{ fontSize: '1.3em', fontWeight: '700' }}>{data.event}</b>
                                        <br />
                                        <br />
                                        <b className='' style={{ fontSize: '1em', fontWeight: '400' }} dangerouslySetInnerHTML={{ __html: data.content }}></b>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className='next' onClick={handleNext} disabled={currentIndex === array.length + 1}>
                        <i className='bi bi-chevron-right' style={{}}></i>
                    </button>
                    <div className='text-white d-flex justify-content-around' style={{ position: 'absolute', marginTop: '560px', zIndex: '1000', minWidth: '350px' }}>
                        {array.map((data, idx) => (
                            <button className='' onClick={e=>hanldeIndexs(idx)} key={idx} style={{ width: '25px', height: '25px', background: `${currentIndex === idx ? '#034EA2' : '#81A7D1'}`, border: `${!currentIndex === idx ? '1px solid #034EA2' : '1px solid white'}`, transform: `scale(${currentIndex === idx ? '0.8' : '.5'})`, transition: '.3s ease-in-out', borderRadius: '50%' }}></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
