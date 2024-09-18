import React, { useEffect, useState } from 'react';
import './index.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    // Handle active link setting
    useEffect(() => {
        const handleActiveLink = () => {
            setActiveLink(window.location.pathname);
        };
        window.addEventListener('popstate', handleActiveLink);
        return () => {
            window.removeEventListener('popstate', handleActiveLink);
        };
    }, []);
    console.log(activeLink)

    return (
        <nav className="container-fluid shadow-md navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
            <div className="container d-flex align-items-center justify-between">
                <a className="navbar-brand" style={{ fontWeight: '700', fontSize: '1.2em' }} href="/">Lunar Logic</a>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ fontSize: '1.5em' }}>Lunar Logic</h3>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body setWidth1000px justify-content-between">
                        <ul className="navbar-nav">
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '/about_us' ? 'nav-link-active' : ''}`} href="/about_us">About Us</a>
                            </li>
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '/#base3' ? 'nav-link-active' : ''}`} href="/#base3">Our Work</a>
                            </li>
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '/#keyPartners' ? 'nav-link-active' : ''}`} href="/#keyPartners">Industries</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link text-uppercase dropdown-toggle ${activeLink === '/services' ? 'nav-link-active' : ''}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our Services</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/services#services_for_Technology">Technology</a></li>
                                    <li><a className="dropdown-item" href="/services#services_for_Marketing">Marketing</a></li>
                                    <li><a className="dropdown-item" href="/services#services_for_More">More..</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '/#ourClients' ? 'nav-link-active' : ''}`} href="/#ourClients">Our Clients</a>
                            </li>
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '/about_us#leaderShipTeam' ? 'nav-link-active' : ''}`} href="/about_us#leaderShipTeam">Testimonials</a>
                            </li>
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '#contactUs' ? 'nav-link-active' : ''}`} href="#contactUs">Contact Us</a>
                            </li>
                            <li>
                                <a className={`nav-link text-uppercase ${activeLink === '#jobOpening' ? 'nav-link-active' : ''}`} href="#jobOpening">Work with Us</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li>
                                <a className='' href='#globe'>
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
