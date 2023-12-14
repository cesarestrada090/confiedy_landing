'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'

const CourseComponent = ({ data }) => {
  return (
    <div>
      <div className="single-courses-box">
        <div className="courses-image">
          <a className="d-block image">
            <img
              src={data.imagenCurso}
              alt="image"
            />
          </a>
        </div>

        <div className="courses-content">
          <h3>
            <Link
              href={`/docente?courseId=${data?.id || ''}&courseName=${
                data?.curso
              }`}
            >
              <a>{`${data.curso} - ${data.nombreUniversidad}`}</a>
            </Link>
          </h3>

          <p>{data.descripcion}</p>

          <ul className="courses-box-footer d-flex justify-content-between align-items-center">
            <li>
              <i className="flaticon-agenda"></i>
              {data.duracion}
            </li>
            <li>
              <i className="flaticon-people"></i>
              {`Máximo ${data.maximoEstudiantes} estudiantes`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CourseComponent
