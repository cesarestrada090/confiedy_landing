import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Educación para Todos.</span>
                    <h2>Conecta con tu asesor de confianza y aprende de manera más fácil.</h2>
                    <p>Encuentra tu propio espacio y utiliza mejor tus opciones de aprendizaje. Disfruta la belleza del aprendizaje.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Confianza</h3>
                            <p>Nuestros asesores Edy estarán a tu disposición para absolver todas tus dudas.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                            </div>
                            <h3>Actitud</h3>
                            <p>¡Juntos trabajaremos para aprender y superar cada prueba!</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Innovación</h3>
                            <p>Aprende con una metodología práctica y útil.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-world"></i>
                            </div>
                            <h3>Metodología</h3>
                            <p>¡Resolvemos los ejercicios modelo para el éxito de tu evaluación!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
