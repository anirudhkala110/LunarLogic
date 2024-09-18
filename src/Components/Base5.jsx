import React from 'react'
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpg';
import pic4 from '../Assets/Images/pic4.jpg';
import pic5 from '../Assets/Images/pic5.jpg';
import pic6 from '../Assets/Images/pic6.jpg';
import pic7 from '../Assets/Images/pic7.jpg';
const Base5 = () => {
    const ch3 = 'Covers Digital Marketing'
    const ch1 = 'SEO Strategies'
    // const ch2 = "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
    const ch2 = "Media Hacks"
    const sliceString = (str, len) => {
        if (len > str.length)
            return str + "..."
        else {
            var str1 = str.slice(0, len) + '...'
            console.log(str1)
            return str1
        }
    }
    return (
        <div>
            <div className='container py-5'>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='btn fs-1'>Lunar Insights</button>
                    <button className='btn btn-outline-dark fs-5 rounded-0'>Explore More Insights&nbsp;&nbsp; <i className='bi bi-arrow-right'></i></button>
                </div>
                <div>
                    <div className='my-3 fw-semibold'>
                        Stay updated with the latest trends, tips, and insights in the digital marketing universe. Our blog covers everything from SEO secrets to social media hacks, ensuring you’re always ahead of the curve.
                    </div>
                    <div className='row py-5'>
                        <div className='col-sm-12 bg-white col-md-6 col-xl-6 col-xxl-6 insightCol mb-4 pt-2'>
                            <button className='btn webinarButton rounded-0 py-0'>WEBINAR</button>
                            <img src={pic1} />
                            <div className='webinarNames py-2'>
                                <button className='btn text-white'>SEO</button>
                                {/* <button className='btn text-white'>Name 2</button>
                                <button className='btn text-white'>Name 3</button> */}
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <b className='fs-3'>{ch1}</b>
                                <p>03 Sep, 2024</p>
                            </div>
                        </div>
                        <div className='col-sm-12 bg-white col-md-6 col-xl-6 col-xxl-6 insightCol mb-4 pt-2'>
                            <button className='btn webinarButton rounded-0 py-0'>WEBINAR</button>
                            <img src={pic7} />
                            <div className='webinarNames py-2'>
                                <button className='btn text-white'>Strategies</button>
                                {/* <button className='btn text-white'>Name 2</button>
                                <button className='btn text-white'>Name 3</button> */}
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <b className='fs-3'>{sliceString(ch1, 40)}</b>
                                <p>13 Sep, 2024</p>
                            </div>
                        </div>
                        <div className='col-sm-12 bg-white col-md-6 col-xl-6 col-xxl-6 insightCol mb-4 pt-2'>
                            <button className='btn webinarButton rounded-0 py-0'>WEBINAR</button>
                            <img src={pic4} />
                            <div className='webinarNames py-2'>
                                <button className='btn text-white'>Marketing</button>
                                {/* <button className='btn text-white'>Name 2</button>
                                <button className='btn text-white'>Name 3</button> */}
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <b className='fs-3'>{sliceString(ch2, 40)}</b>
                                <p>17 Sep, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base5