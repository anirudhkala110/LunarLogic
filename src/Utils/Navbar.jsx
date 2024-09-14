import React from 'react';
import './index.css';

const Navbar = () => {
    return (
        <nav className="container-fluid shadow-md navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
            <div className="container d-flex align-items-center justify-between">
                <a className="navbar-brand" style={{ fontWeight: '700', fontSize: '1.1em' }} href="/">Lunar Logic</a>

                {/* Offcanvas Toggle Button */}
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Offcanvas Component */}
                <div className="offcanvas offcanvas-start " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Lunar Logic</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body setWidth1000px justify-content-between" style={{ width: '' }}>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    WHO WE ARE
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/about_us">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Leadership Team</a></li>
                                    <li><a className="dropdown-item" href="#">#ChallengeTheNow</a></li>
                                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a className="dropdown-item" href="#">Partners</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    WHAT WE DO
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Business Consulting <i className='bi bi-chevron-right'></i></a></li>
                                    <li><a className="dropdown-item" href="#">Activation <i className='bi bi-chevron-right'></i></a></li>
                                    <li><a className="dropdown-item" href="#">Transformation <i className='bi bi-chevron-right'></i></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    INDUSTRIES
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">BFSI</a></li>
                                    <li><a className="dropdown-item" href="#">Retail</a></li>
                                    <li><a className="dropdown-item" href="#">Gaming</a></li>
                                    <li><a className="dropdown-item" href="#">FMCG</a></li>
                                    <li><a className="dropdown-item" href="#">Education</a></li>
                                    <li><a className="dropdown-item" href="#">Healthcare</a></li>
                                    <li><a className="dropdown-item" href="#">IT & Technology</a></li>
                                    <li><a className="dropdown-item" href="#">Lifestyle</a></li>
                                    <li><a className="dropdown-item" href="#">Travel & Tourism</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    WHAT WE THINK
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">News</a></li>
                                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                                    <li><a className="dropdown-item" href="#">LDTV</a></li>
                                    <li><a className="dropdown-item" href="#">Articles</a></li>
                                    <li><a className="dropdown-item" href="#">Webinar's</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    OUR WORK
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Case Studies</a></li>
                                    <li><a className="dropdown-item" href="#">Creative Portfolio</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    JOIN US
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Life at Lunar Logic</a></li>
                                    <li><a className="dropdown-item" href="#">Open Positions</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#contactUs">
                                    CONTACT US
                                </a>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul> */}
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li>
                                <a className='' href='#contactUs'>
                                    <button className="btn" style={{ fontWeight: '700' }}><i className="bi bi-globe2"></i> GLOBAL</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
