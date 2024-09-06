import React from 'react'

const NewLetterSignup = () => {
    return (
        <div>
            <div className='container align-items-center text-white py-5 '>
                <div className='row py-3'>
                    <div className='col-sm-12 col-md-6'>
                        <p className='fs-3' style={{fontWeight:'700'}}>Sign up to our weekly newsletter to find out trending insights.</p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='form-group d-flex align-items-center justify-between py-3'>
                            <input className='form-control py-3 fs-5 w-100' placeholder='Email Address' />
                            <button className='btn bg-blue-700 py-3 fs-5 mx-2 subscribeButton text-white'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewLetterSignup