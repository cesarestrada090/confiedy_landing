import React from 'react';
import Link from 'next/link';

const PopularCourses = () => {
    return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Aprende a tu propio ritmo</span>
                    <h2>Cursos Populares en Confiedy</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya </span>
                                </div>

                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Matemática Básica - PUCP</a>
                                    </Link>
                                </h3>
                                
                                <p>El curso permitirá a los estudiantes reconocer la importancia de las matemáticas en diversas actividades de la vida cotidiana, así como en distintos campos del conocimiento y contribuirá a desarrollar el razonamiento lógico. Esto se hará a través de situaciones que correspondan a contextos propios de las distintas especialidades y cuyo análisis requiera del empleo de conceptos matemáticos fundamentales.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 15 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya </span>
                                </div>

                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Matemática para Economía y Finanzas I - PUCP</a>
                                    </Link>
                                </h3>

                                <p> Este curso abarca los siguientes temas: sistema de números reales, relaciones y funciones. Funciones de una variable, concepto de límite; tasa de cambio y derivadas, derivada y pendiente de una curva, teoremas sobre límites; continuidad y diferenciabilidad de funciones, reglas de diferenciación.</p>
                                
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 15 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">
                               <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>Axel Mendoza</span>
                                </div>

                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Matemática Financiera - PUCP</a>
                                    </Link>
                                </h3>
                                <p>Se estudia el valor del dinero en el tiempo, el valor presente y valor futuro, el interés simple y compuesto, la tasa de interés nominal y efectiva, las anualidades y perpetuidades, los sistemas de amortización de préstamos, las operaciones activas y pasivas, el valor presente neto y tasa interna de retorno, y la evaluación de opciones de inversión y financiación, entre otros temas de interés..</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 15 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. <Link href="/profile-authentication"><a>Register Free Now!</a></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;
