import React, { useState } from 'react'

const AboutBase1 = () => {
    const [buttonNumber, setButtonNumber] = useState(1)
    return (
        <div className='container inter-700 pt-5'>
            <div className='row pt-5 d-flex align-items-center justify-content-start' style={{ minHeight: '80vh' }}>
                <div className='' style={{ fontSize: "", lineHeight: '64px' }}>
                    <b className=' my-3 ' style={{ color: '#F15A22', fontSize: '20px' }}>WHO WE ARE</b>
                    <div className=' text-white' style={{ maxWidth: '950px',width:'100%' }}>
                        <p className='fs-1'>
                            We’re here as your partners to power you to <b className='' style={{ color: '#FDB913' }}>#ChallengeTheNow</b> to build a digital future.
                        </p>
                        <br/>
                        <b className='mt-4' style={{fontSize:'1.3rem',fontWeight:'300',marginTop:'100px'}}>That’s where a multi-skilled expert comes into the picture. One entity that has the solutions across platforms, genres and media.</b>
                    </div>
                </div>
            </div>
            <div className='row pb-1' style={{marginTop:''}}>
                <div className='d-flex align-items-center justify-start px-5' style={{ borderTop: '1px solid #C6C5C5' }}>
                    <a href='#aboutLL' className={`${buttonNumber == 1 ? 'btnActive mx-2' : 'btnNormal mx-2 '} p-3 `} onClick={() => setButtonNumber(1)} >Overview</a>
                    {/* <a href='#values' className={`${buttonNumber == 2 ? 'btnActive mx-2' : 'btnNormal mx-2 '} py-3`} onClick={() => setButtonNumber(2)} >Our Values</a> */}
                    {/* <a href='#groups' className={`${buttonNumber == 3 ? 'btnActive mx-2' : 'btnNormal mx-2 '} p-3`} onClick={() => setButtonNumber(3)} >Group</a> */}
                    {/* <a href='#leadershipTeamGroup' className={`${buttonNumber == 4 ? 'btnActive mx-2' : 'btnNormal mx-2 '} p-3`} onClick={() => setButtonNumber(4)} >Meet Our Leaders</a> */}
                    <a href='#award' className={`${buttonNumber == 5 ? 'btnActive mx-2' : 'btnNormal mx-2 '} p-3`} onClick={() => setButtonNumber(5)} >Awards & Recognition</a>
                </div>
            </div>
        </div>
    )
}

export default AboutBase1