import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1>ConfiEdy es el mejor aliado para superar tus metas universitarias.</h1>
                            <h2>Aprende con nuestras clases personalizadas por curso. Contamos con los materiales necesarios y la asesoría confiable de nuestros asesores.</h2>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-courses-list">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="#">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses4.jpg" alt="image" />
                                                </a>
                                            </Link>

                                        </div>


                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="#">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses5.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="banner-shape3">
                                <img src="/images/banner-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
