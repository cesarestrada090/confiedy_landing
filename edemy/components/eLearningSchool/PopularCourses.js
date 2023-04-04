import React from 'react';
import Link from 'next/link';

const PopularCourses = () => {
    return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Aprende a tu propio ritmo</span>
                    <h2>Cursos Populares en Confiedy</h2>
                    <p>¡Explore todos nuestros cursos y elije los adecuados para inscribirte y comienza a aprender con nosotros!    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                    <a className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya </span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Matemática Básica - PUCP</a>
                                    </Link>
                                </h3>
                                
                                <p>El curso permitirá a los estudiantes reconocer la importancia de las matemáticas en diversas actividades de la vida cotidiana, así como en distintos campos del conocimiento y contribuirá a desarrollar el razonamiento lógico. Esto se hará a través de situaciones que correspondan a contextos propios de las distintas especialidades y cuyo análisis requiera del empleo de conceptos matemáticos fundamentales.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                    <a className="d-block image">
                                        <img src="/images/courses/courses2.jpg" alt="image" />
                                    </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya </span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Matemática para Economía y Finanzas I - PUCP</a>
                                    </Link>
                                </h3>

                                <p> Este curso abarca los siguientes temas: sistema de números reales, relaciones y funciones. Funciones de una variable, concepto de límite; tasa de cambio y derivadas, derivada y pendiente de una curva, teoremas sobre límites; continuidad y diferenciabilidad de funciones, reglas de diferenciación.</p>
                                
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                    <a className="d-block image">
                                        <img src="/images/courses/courses3.jpg" alt="image" />
                                    </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/gino.jpeg" className="rounded-circle" alt="image" />
                                    <span>Gino Bonilla</span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Matemática Financiera - PUCP</a>
                                    </Link>
                                </h3>
                                <p>Se estudia el valor del dinero en el tiempo, el valor presente y valor futuro, el interés simple y compuesto, la tasa de interés nominal y efectiva, las anualidades y perpetuidades, los sistemas de amortización de préstamos, las operaciones activas y pasivas, el valor presente neto y tasa interna de retorno, y la evaluación de opciones de inversión y financiación, entre otros temas de interés..</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses1.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya </span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Introducción a la Estadística y Probabilidad- PUCP</a>
                                    </Link>
                                </h3>

                                <p>El curso presenta las bases formales de los modelos probabilísticos asociados con el análisis estadístico de datos y luego introduce al alumno en el uso de estos modelos para la toma de decisiones en condiciones de incertidumbre con datos provenientes de muestras, aplicando técnicas estadísticas descriptivas e inferenciales. Se estudia el muestreo, estadísticas de tendencia central y de dispersión; números índice e introducción a las series de tiempo.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses2.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya </span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Estadística </a>
                                    </Link>
                                </h3>

                                <p> Presenta al estudiante las técnicas estadísticas elementales adiestrándolo en su uso, de modo que pueda aplicarlas al proceso de convertir datos numéricos aislados en información, para la toma de decisiones. Se revisan los métodos estadísticos descriptivos e inferenciales comunes a las diferentes especialidades que constituyen los Estudios Generales Letras, sentando las bases para cursos posteriores más avanzados.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses3.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/gino.jpeg" className="rounded-circle" alt="image" />
                                    <span>Gino Bonilla</span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Matemática I</a>
                                    </Link>
                                </h3>
                                <p>El curso ofrece una introducción a las funciones matemáticas y a algunas aplicaciones de las mismas a través de los siguientes temas: sistema de números reales; elementos de geometría analítica; gráficas de ecuaciones e inecuaciones lineales y cuadráticas en dos variables reales; introducción a la programación lineal; funciones reales de variable real: lineales, cuadráticas, polinomiales, racionales; modelo básico del inventario; funciones exponenciales y logarítmicas; sucesiones; sumatorias; elementos de matemática financiera.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses1.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/gino.jpeg" className="rounded-circle" alt="image" />
                                    <span>Gino Bonilla </span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Matemática 2</a>
                                    </Link>
                                </h3>

                                <p>Este curso es el primero de una serie destinada a sentar las bases matemáticas de las ciencias de Gestión y Alta Dirección, y de Contabilidad. Sus temas son: límite de funciones reales de una variable real, continuidad de funciones reales de una variable real, derivada de funciones reales de una variable real, aplicaciones de la derivada, integración de funciones reales de una variable real y aplicaciones de la integración.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses2.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/gino.jpeg" className="rounded-circle" alt="image" />
                                    <span>Gino Bonilla</span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Finanzas 1 </a>
                                    </Link>
                                </h3>

                                <p> Busca desarrollar en el alumno las habilidades necesarias para la evaluación y análisis de proyectos de inversión en un contexto de riesgo. Para esto, se profundiza en temas como los criterios para evaluar proyectos de inversión, el costo promedio ponderado del capital, el modelo de valoración de activos (CAPM) para mercados emergentes, la inversión fija y el valor residual, el capital de trabajo y los gastos pre-operativos, la evaluación económica y financiera, la evaluación de proyectos de inversión en MYPES y el análisis de sensibilidad, escenarios y simulación.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses3.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/giovanni.jpeg" className="rounded-circle" alt="image" />
                                    <span>Giovani Morales</span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Contabilidad Financiera</a>
                                    </Link>
                                </h3>
                                <p>El curso ofrece una introducción a las funciones matemáticas y a algunas aplicaciones de las mismas a través de los siguientes temas: sistema de números reales; elementos de geometría analítica; gráficas de ecuaciones e inecuaciones lineales y cuadráticas en dos variables reales; introducción a la programación lineal; funciones reales de variable real: lineales, cuadráticas, polinomiales, racionales; modelo básico del inventario; funciones exponenciales y logarítmicas; sucesiones; sumatorias; elementos de matemática financiera.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">


                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">

                                <a className="d-block image">
                                    <img src="/images/courses/courses3.jpg" alt="image" />
                                </a>

                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/juan_minaya.jpeg" className="rounded-circle" alt="image" />
                                    <span>Juan Carlos Minaya</span>
                                </div>

                                <h3>
                                    <Link href="https://wa.me/51996115374">
                                        <a>Fundamentos de Cálculo</a>
                                    </Link>
                                </h3>
                                <p>En este curso, se
                                    utiliza los principios básicos de la lógica matemática para analizar, demostrar conjeturas y realizar
                                    demostraciones indirectas o directas. Asimismo, se aplica el principio de inducción matemática como un
                                    método de demostración directa y se resuelve inecuaciones usando propiedades de desigualdades en los
                                    números reales. Además, se aborda los conceptos y propiedades fundamentales de las funciones reales de
                                    variable real, tales como las funciones lineales, polinómicas, racionales, valor absoluto, exponenciales,
                                    logarítmicas, trigonométricas y trigonométricas inversas. También, se profundiza sobre los conocimientos de
                                    estas funciones aplicando operaciones con funciones, la composición de funciones, función inyectiva y función
                                    inversa en la resolución de problemas intramatemáticos y extramatemáticos.</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 4 Horas
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> Máximo 5 estudiantes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;
