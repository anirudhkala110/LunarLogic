import React from 'react'

const TeamPage = () => {
    const notice = `
        <b>LunarLogic</b> would like to bring to the public's attention an unfortunate rise in fraudulent activities where individuals or entities are misusing our identity. It has come to light that certain parties are falsely claiming to be employees, representatives, or agents of LunarLogic in an attempt to deceive job seekers. 
        <br/><br/>
        These fraudsters are leveraging online platforms such as <b>[Telegram, WhatsApp, LinkedIn, and various websites]</b>, along with direct phone calls, to offer fake employment opportunities. In some cases, they are even issuing fraudulent offer letters, conducting illegitimate interviews, and requesting financial payments into specific bank accounts.
        <br/><br/>
        We urge everyone to exercise caution and verify any communications that appear to come from LunarLogic to confirm their authenticity.
        <br/><br/>
        <b>LunarLogic does not charge any fees from job seekers at any stage of the recruitment process.</b> We do not authorize any individual or entity to request payments or make financial arrangements in exchange for employment opportunities.
        <br/><br/>
        All official communication from LunarLogic's human resources or recruitment teams will come from email addresses that use the domain <b>[LUNARLOGIC.COM]</b>. If you receive communication from any other domain or generic email services such as Gmail or Yahoo regarding job offers or interviews, please proceed with caution, as this is likely a scam.
        <br/><br/>
        If you believe you have been targeted by fraudulent recruitment schemes, we strongly encourage you to report the incident to the appropriate law enforcement authorities immediately.
    `;

    return (
        <div className='py-5' id="contactUs">
            <div className='container rounded-2 my-5' style={{ background: '#034EA2' }}>
                <div className='row py-5 px-2'>
                    <div className='text-white my-2 d-flex align-items-center'>
                        <button className='rounded-0 btn btn-primary'>Get In Touch</button>
                        <div className='my-3'>
                            <a href='tel:+917669270784'>
                                <button className='btn rounded-0 btn-light'>Call Us: &nbsp; +91 7669270784</button>
                            </a>
                        </div>
                    </div>
                    <div className='text-light'>
                        Ready to elevate your brand’s digital presence? Contact LunarLogic today to discover how we can help you achieve your business goals. Whether you need a detailed consultation or just want to learn more about our services, we’re here to assist.
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-6 my-2 py-5'>
                        <div className='text-white'>
                            <b className='fs-4' style={{ fontWeight: '700' }}>Reach out to our specialist team to initiate the conversation</b>
                            <p>Fill your details, and our team will contact you.</p>
                            <br />
                            <br />
                            <br />
                            <b style={{ fontWeight: '700' }} className='fs-3'>PUBLIC NOTICE </b><br />
                            <div className='text-black p-3 rounded w-100' style={{ backgroundColor: 'white',maxHeight:"500px",overflowY:'auto' }} dangerouslySetInnerHTML={{ __html: notice }}></div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 my-3 py-5'>
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
                            <div className='form-group mb-3' id='descriptionForm'>
                                <label style={{ fontWeight: '600', fontSize: '18px' }}>Description <sup className='text-danger'>*</sup></label>
                                <textarea type='text' className='form-control rounded-0 w-100' rows={5} />
                            </div>
                            <div className='form-group mb-3'>
                                <input type='checkbox' className='form-check-input' />
                                <label style={{ fontWeight: '100', fontSize: '18px' }}>Select this box to receive updates and marketing. You can change your preferences at any time as per our Privacy Policy <sup className='text-danger'>*</sup></label>
                            </div>
                            <div className='w-100 d-flex justify-content-center align-items-center'>
                                <button className='formActionBtn fw-semibold fs-5 m-2 btn rounded-0' id='submit'>SUBMIT</button>
                                <button className='formActionBtn fw-semibold fs-5 m-2 btn rounded-0'>RESET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage;
