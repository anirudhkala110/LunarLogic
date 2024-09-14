import React from 'react'

const BenchMark = () => {
    return (
        <div className='bg-dark'>
            <div className='container px-2 align-items-center text-white py-3 '>
                <div className='row py-2'>
                    <div className='col-sm-12 col-md-8'>
                        <p className='fs-3' style={{ fontWeight: '700' }}>Benchmark your company’s digital maturity with a quick 10 minutes assessment</p>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <div className='form-group d-flex align-items-center justify-between py-3'>
                            <button className='btn bg-white py-3 fs-5 mx-2 subscribeButton text-dark text-uppercase'>TRY OUR Assessment <i className='bi bi-arrow-right'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenchMark