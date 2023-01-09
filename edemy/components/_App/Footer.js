import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/logo2.png" alt="logo" />
                                </a>
                            </Link>

                            <p>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>

                            <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/courses-1">
                                        <a>Courses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events">
                                        <a>Events</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="#">
                                        <a>Student Success</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Scholarships</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>For Business</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Go Premium</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Team Plans</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    Av Reducto 864 - Miraflores - Perú
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+44587154756">+51 996115374</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i> 
                                    <a href="mailto:hello@edemy.com">contacto@confiedy.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
    );
}

export default Footer;
