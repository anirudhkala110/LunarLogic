import React from 'react'
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpg';
import pic4 from '../Assets/Images/pic4.jpg';
import pic5 from '../Assets/Images/pic5.jpg';
import pic6 from '../Assets/Images/pic6.jpg';
import pic7 from '../Assets/Images/pic7.jpg';
const Base5 = () => {
    const ch1 = 'Busting Digital Myths in the UAE: A session on debunking some popular misconceptions for the marketing community.'
    const ch2 = "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
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
                    <button className='btn fs-1'>Latest Insights</button>
                    <button className='btn btn-outline-dark fs-5 rounded-0'>Explore More Insights&nbsp;&nbsp; <i className='bi bi-arrow-right'></i></button>
                </div>
                <div>
                    <div className='row py-5'>
                        <div className='col-sm-12 bg-white col-md-6 col-xl-6 col-xxl-6 insightCol mb-4 pt-2'>
                            <button className='btn webinarButton rounded-0 py-0'>WEBINAR</button>
                            <img src={pic1} />
                            <div className='webinarNames py-2'>
                                <button className='btn text-white'>Name 1</button>
                                <button className='btn text-white'>Name 2</button>
                                <button className='btn text-white'>Name 3</button>
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <b className='fs-3'>DMT Thursdays Episode 1</b>
                                <p>03 APR, 2024</p>
                            </div>
                        </div>
                        <div className='col-sm-12 bg-white col-md-6 col-xl-6 col-xxl-6 insightCol mb-4 pt-2'>
                            <button className='btn webinarButton rounded-0 py-0'>WEBINAR</button>
                            <img src={pic7} />
                            <div className='webinarNames py-2'>
                                <button className='btn text-white'>Name 1</button>
                                <button className='btn text-white'>Name 2</button>
                                <button className='btn text-white'>Name 3</button>
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <b className='fs-3'>{sliceString(ch1,40)}</b>
                                <p>03 APR, 2024</p>
                            </div>
                        </div>
                        <div className='col-sm-12 bg-white col-md-6 col-xl-6 col-xxl-6 insightCol mb-4 pt-2'>
                            <button className='btn webinarButton rounded-0 py-0'>WEBINAR</button>
                            <img src={pic4} />
                            <div className='webinarNames py-2'>
                                <button className='btn text-white'>Name 1</button>
                                <button className='btn text-white'>Name 2</button>
                                <button className='btn text-white'>Name 3</button>
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <b className='fs-3'>{sliceString(ch2,40)}</b>
                                <p>03 APR, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base5