import React from 'react';

const Services = () => {
    return (
        <div className='mt-5 bg-light' id='services'>
            <div className='py-5'>
                <div className="container mt-5">
                    <div className="text-center mb-5">
                        <h2 className="display-4">Our Services</h2>
                        <p className="lead">Explore the phases of your business growth with our expert services.</p>
                    </div>
                </div>

                {/* Technology Section */}
                <div className='bg-white py-5' id='services_for_Technology'>
                    <div className='container'>
                        <div className='fs-2 my-4 py-4'>Technology</div>
                        <div className="row py-4">
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Front-end Engineering</h3>
                                        <ul>
                                            <li>Build interactive, responsive user interfaces.</li>
                                            <li>React, Angular, Vue.js development.</li>
                                            <li>Optimized performance and accessibility.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Backend Engineering</h3>
                                        <ul>
                                            <li>Server-side development and integration.</li>
                                            <li>API development and database management.</li>
                                            <li>Cloud infrastructure and microservices.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">UI/UX</h3>
                                        <ul>
                                            <li>Design user-centric interfaces for better experiences.</li>
                                            <li>Prototyping, wireframing, and user testing.</li>
                                            <li>UI/UX consulting and design systems.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">AI/ML</h3>
                                        <ul>
                                            <li>Develop intelligent systems for data analysis.</li>
                                            <li>Machine learning models and AI automation.</li>
                                            <li>Natural language processing and image recognition.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Testing</h3>
                                        <ul>
                                            <li>End-to-end software testing and quality assurance.</li>
                                            <li>Manual and automated testing solutions.</li>
                                            <li>Security, performance, and load testing.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Database</h3>
                                        <ul>
                                            <li>Robust database design and optimization.</li>
                                            <li>SQL and NoSQL database solutions.</li>
                                            <li>Database migration, scaling, and security.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">DevOps</h3>
                                        <ul>
                                            <li>Continuous integration and delivery pipelines.</li>
                                            <li>Cloud infrastructure automation and orchestration.</li>
                                            <li>Monitoring, logging, and security operations.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marketing Section */}
                <div className='container border-0'>
                    <hr />
                </div>
                <div className='bg-white py-5' id='services_for_Marketing'>
                    <div className='container'>
                        <div className='fs-2 my-4 py-4'>Marketing</div>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Subsection 1</h3>
                                        <ul>
                                            <li>Marketing strategy and planning.</li>
                                            <li>Market analysis and campaign management.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Subsection 2</h3>
                                        <ul>
                                            <li>Content marketing and audience targeting.</li>
                                            <li>SEO, SEM, and PPC campaigns.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="hoverCards card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">Subsection 3</h3>
                                        <ul>
                                            <li>Branding and digital advertising.</li>
                                            <li>Influencer and partnership marketing.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Services */}
                <div className='container border-0' id='services_for_More'>
                    <hr />
                </div>
                <div className='bg-white py-5'>
                    <div className='container'>
                        <div className='fs-2 my-4 py-4'>Brand & Content</div>
                        <p>Our expert branding services to make your company stand out in the market.</p>
                    </div>
                </div>
                <div className='bg-white py-5'>
                    <div className='container'>
                        <div className='fs-2 my-4 py-4'>Tech Contracting</div>
                        <p>We provide the right tech talent for your business needs.</p>
                    </div>
                </div>
                <div className='bg-white py-5'>
                    <div className='container'>
                        <div className='fs-2 my-4 py-4'>Data & Analysis</div>
                        <p>Data-driven insights and analytics to guide business decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
