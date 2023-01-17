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

                            <ul className="social-link">
                                <li>
                                    <a href="https://www.facebook.com/ConfiEdy" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/confiedy.edtech/" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/juan-carlos-minaya-alvarado-8355a0b1/?originalSubdomain=pe" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">

                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">

                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Dirección</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    Av. Reducto 864 - Miraflores - Perú
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+44587154756">+51 996115374</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i> 
                                    contacto@confiedy.com
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
