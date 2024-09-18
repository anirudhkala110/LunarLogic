import React from 'react'

const Footer3 = () => {
    return (
        <div className='container' >
            <p className='fw-semibold my-2 text-white'>Schedule A CallBack</p>
            <form className='form px-3' style={{ maxWidth: '1000px' }}>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Service Interested <sup className='text-danger'>*</sup></label>
                    <select class="form-control w-100" id="" name="">
                        <option value="-None-">-None-</option>
                        <option value="Consultation and Assessment Service">
                            Consultation and Assessment Service
                        </option>
                        <option value="Marketing Service">Marketing Service</option>
                        <option value="Transformation Service">Transformation Service</option>
                        <option value="Media Service">Media Service</option>
                        <option value="Creative Service">Creative Service</option>
                        <option value="UI/UX Service">UI/UX Service</option>
                        <option value="Consumer Experience Service">Consumer Experience Service</option>
                        <option value="Web Technology and Innovation Service">Web Technology and Innovation Service</option>
                        <option value="Data and Insights Service">Data and Insights Service</option>
                        <option value="Integrated Services">Integrated Services</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>First Name <sup className='text-danger'>*</sup></label>
                    <input className='form-control w-100' style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Last Name <sup className='text-danger'>*</sup></label>
                    <input className='form-control w-100' style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Business Name <sup className='text-danger'>*</sup></label>
                    <input className='form-control w-100' style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Job Title <sup className='text-danger'>*</sup></label>
                    <input className='form-control w-100' style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Business Email <sup className='text-danger'>*</sup></label>
                    <input type='email' className='form-control w-100' style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Mobile <sup className='text-danger'>*</sup></label>
                    <input type='number' className='form-control w-100' style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <label className='mb-2' style={{ color: '#B3E6FF' }}>Description <sup className='text-danger'>*</sup></label>
                    <textarea type='text' className='form-control w-100' rows={5} style={{ background: 'transparent', color: '#B3E6FF' }} />
                </div>
                <div className='input-group mb-3'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp;&nbsp;&nbsp;
                    <label class="form-check-label" for="flexCheckChecked" style={{ color: '#B3E6FF' }}>
                        Select this box to receive updates and marketing. You can change your preference at any time as per our Privacy Policy. <sup className='text-danger'>*</sup>
                    </label>
                </div>
            </form>
            <button className='btn formButton text-uppercase rounded-0 me-2 my-2'>
                Submit
            </button>
            <button className='btn formButton text-uppercase rounded-0 me-2 my-2'>
                Reset
            </button>
        </div>
    )
}

export default Footer3