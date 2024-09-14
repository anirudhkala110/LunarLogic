import React from 'react'
import randomPic from './randomPic.jpg'
let array = []
const LeadershipTeamGroup = () => {
    for (let index = 0; index < 17; index++) {
        array[index] = index;
    }
    console.log(array)
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div>
                    <center className='mb-2' style={{ fontSize: '2.5em', fontWeight: 'bold' }}>Leadership Team (Group)</center>
                    <center className='' style={{ fontSize: '1.5em', fontWeight: '' }}>We work as a team, We have a young, passionate and industry accolades in our leadership team.</center>
                </div>
                <div className='row py-5'>
                    {array.map((data, idx) => (
                        <div className='col-sm-12 col-md-3 col-lg-3 col-sl-3 col-xxl-3 mb-4' key={idx}>
                            <div className='hoverImageForDescription'>
                                <i className='bi bi-linkedin' style={{}}></i>
                                <img className='Image' src={randomPic} style={{ height: '400px', width: '350px', objectFit: 'cover' }} />
                                <div className='w-100 hoverImageForDescriptionInnerDiv p-3' style={{}}>
                                    <b className='' style={{ fontSize: '1.3em', fontWeight: '600' }}>User Name </b>
                                    <hr style={{ color: 'transparent', height: '15px' }} />
                                    <p>Cheif Finance Officer (CFO) and Cheif Operations Officer (COO)</p>
                                    <hr style={{ color: 'transparent', height: '15px' }} />
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default LeadershipTeamGroup