import React, { useEffect, useMemo, useState } from 'react'

import { Block } from 'baseui/block'

import CourseComponent from './CourseComponent'
import UniversityFilter from './UniversityFilter'
import CourseFilter from './CourseFilter'

import { useAPI } from '../../contexts/apiContext'

import axios from 'axios'
import { API_URLS } from './constants'

const PopularCourses = () => {
  const [courses, setCourses] = useState([])
  const [coursesFiltered, setCoursesFiltered] = useState([])
  const [universityFilter, setUniversityFilter] = useState([])
  const [courseFilter, setCourseFilter] = useState([])

  const { universities } = useAPI()

  const universityFilterList = useMemo(() => universities)
  const courseFilterList = useMemo(
    () =>
      courses.map(({ codigoCurso, curso }) => ({
        id: codigoCurso,
        label: curso,
      })),
    [courses]
  )

  const handleUniversityFilterChange = (params) => {
    setUniversityFilter(params.value)

    const universityFilterValue = params.value[0]?.id || ''

    if (!universityFilterValue) {
      setCourses([])
      setCoursesFiltered([])

      return
    }

    axios
      .get(`${API_URLS.listCoursesPerUniversity}${universityFilterValue}`)
      .then(function (response) {
        console.log('response', response.data)
        setCourses(response.data)
        setCoursesFiltered(response.data)
      })
      .catch((error) => console.log(error))
  }

  const handleCourseFilterChange = (params) => {
    setCourseFilter(params.value)

    const courseFilterValue = params.value[0]?.id || ''

    if (!courseFilterValue) {
      setCoursesFiltered(courses)
      return
    }

    setCoursesFiltered(
      courses.filter((course) => courseFilterValue === course.codigoCurso)
    )
  }

  return (
    <div className="courses-area ptb-100">
      <div className="container">
        <div
          className="section-title"
          style={{ zIndex: 100, position: 'relative' }}
        >
          <span className="sub-title">Aprende a tu propio ritmo</span>
          <h2>Cursos Populares en Confiedy</h2>
          <p>
            ¡Explore todos nuestros cursos y elije los adecuados para
            inscribirte y comienza a aprender con nosotros!{' '}
          </p>
          <Block
            display={'grid'}
            gridGap={'scale600'}
            gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
            marginTop={'scale1000'}
            position={'relative'}
          >
            <Block position={'relative'}>
              <UniversityFilter
                options={universityFilterList}
                onChange={handleUniversityFilterChange}
                value={universityFilter}
              />
            </Block>
            <Block position={'relative'}>
              <CourseFilter
                options={courseFilterList}
                onChange={handleCourseFilterChange}
                value={courseFilter}
                disabled={!universityFilter || !universityFilter.length}
              />
            </Block>
          </Block>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Block
          display={'grid'}
          gridGap={'scale800'}
          gridTemplateColumns={[
            '1fr',
            '1fr',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
          overrides={{ Block: { style: { zIndex: 1, position: 'relative' } } }}
        >
          {coursesFiltered.map((data, index) => (
            <CourseComponent
              data={data}
              key={index}
            />
          ))}
        </Block>
      </div>
    </div>
  )
}

export default PopularCourses
