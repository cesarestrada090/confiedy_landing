import React, { useEffect, useState } from 'react'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import { API_URLS } from '../components/eLearningSchool/constants'

import { Block } from 'baseui/block'

import axios from 'axios'

import { useRouter } from 'next/router'
import Professor from '../components/Professor'

const Profile = () => {
  const {
    query: { courseId, courseName },
  } = useRouter()

  const [professors, setProfessors] = useState([])

  useEffect(() => {
    if (!courseId) {
      return
    }

    axios
      .get(`${API_URLS.listProfessorsPerCourse}${courseId}`)
      .then((response) => {
        setProfessors(response.data)
      })
      .catch((error) => console.log(error))
  }, [courseId])

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle={`Docentes de ${courseName}`}
        homePageUrl="/"
        homePageText="Home"
        activePageText={`Docentes de ${courseName}`}
      />

      <div className="profile-area">
        <div className="container">
          <Block
            display={'grid'}
            gridGap={'scale1000'}
            marginBottom={'scale3200'}
          >
            {professors.map((data, index) => (
              <Professor
                data={data}
                key={index}
              />
            ))}
          </Block>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Profile
