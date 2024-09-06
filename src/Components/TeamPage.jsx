import React from 'react'

const TeamPage = () => {
    const notice = "This serves as a public notice to raise awareness regarding the misuse of Logicserve Digital Private Limited’s (LS Digital) identity. It has come to our attention that certain individuals/entities are engaging in fraudulent activities by falsely representing themselves as employees, representatives, or agents of LS Digital. These perpetrators aim to exploit and deceive prospective job seekers by illegitimately offering employment opportunities through various online platforms such as [Telegram, WhatsApp, LinkedIn and other websites]. We understand that they are also reaching out to people via telephone calls, issuing counterfeit offer letters, conducting fake interviews and requesting financial deposits into specific bank accounts. We encourage the public to exercise caution and verify any such communications to ensure authenticity. Please note that LS Digital never solicits any form of payment from prospective job seekers or candidates seeking employment opportunities and does not authorize any individual to collect money or enter into any monetary arrangements in exchange for job placements within the organization. Our human resources/recruitment team exclusively corresponds through email addresses with the domain [LSDIGITAL.COM]. If you receive any communication from any other domain or through a generic email ID ending with Gmail/Yahoo domain regarding a job offer or interview call, exercise vigilance, as it may indicate a potential scam. In the event that you believe you have fallen victim to recruitment fraud, we urge you to promptly report the incident to law enforcement agencies."
    return (
        <div className='py-2'>
            <div className='container min-vh-100 rounded-2' style={{ background: '#034EA2' }}>
                <div className='row py-5 px-2'>
                    <div className='col-sm-12 col-md-6 my-2 py-5'>
                        <div className='text-white'>
                            <b className='fs-4' style={{ fontWeight: '700' }}>Reach out to our specialist team to initiate the conversation</b>
                            <p>Fill your details, and our team will contact you.</p>
                            <br />
                            <br />
                            <br />
                            <b style={{ fontWeight: '700' }} className='fs-3'>PUBLIC NOTICE </b><br />
                            <textarea className='text-black p-3 rounded w-100' rows={20} style={{ resize: 'none' }} value={notice}></textarea>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 my-3 py-5'>
                        <form className='form bg-white rounded-3 p-3'>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Service Interested <sup className='text-danger'>*</sup></label>
                                <select class="form-select" id="LEADCF50" name="LEADCF50" data-gtm-form-interact-field-id="0">
                                    <option value="-None-">-None-</option>
                                    <option value="Consultation and Assessment Service">
                                        Consultation and Assessment Service
                                    </option>
                                    <option value="Marketing Service">Marketing Service</option>
                                    <option value="Transformation Service">
                                        Transformation Service
                                    </option>
                                    <option value="Media Service">Media Service</option>
                                    <option value="Creative Service">Creative Service</option>
                                    <option value="UI/UX Service">UI/UX Service</option>
                                    <option value="Consumer Experience Service">
                                        Consumer Experience Service
                                    </option>
                                    <option value="Web Technology and Innovation Service">
                                        Web Technology and Innovation Service
                                    </option>
                                    <option value="Data and Insights Service">
                                        Data and Insights Service
                                    </option>
                                    <option value="Integrated Services">Integrated Services</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>First Name <sup className='text-danger'>*</sup></label>
                                <input type='text' className='form-control rounded-0' />
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Last Name <sup className='text-danger'>*</sup></label>
                                <input type='text' className='form-control rounded-0' />
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Business Name <sup className='text-danger'>*</sup></label>
                                <input type='text' className='form-control rounded-0' />
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Job Title <sup className='text-danger'>*</sup></label>
                                <input type='text' className='form-control rounded-0' />
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Business Email<sup className='text-danger'>*</sup></label>
                                <input type='email' className='form-control rounded-0' />
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Mobile <sup className='text-danger'>*</sup></label>
                                <input type='number' className='form-control rounded-0' />
                            </div>
                            <div className='form-group mb-3'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Description <sup className='text-danger'>*</sup></label>
                                <textarea type='text' className='form-control rounded-0 w-100' rows={5} />
                            </div>
                            <div className='form-group mb-3'>
                                <input type='checkbox' className='form-check-input' />
                                <label style={{ fontWeight: '100', fontSize: '18px' }}>Select this box to receive updates and marketing. You can change your preferences at any time as per our Privacy Policy <sup className='text-danger'>*</sup></label>
                            </div>
                            <div className='w-100 d-flex justify-content-center align-items-center'>
                                <button className='formActionBtn fw-semibold fs-5 m-2 btn rounded-0'>SUBMIT</button>
                                <button className='formActionBtn fw-semibold fs-5 m-2 btn rounded-0'>RESET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage