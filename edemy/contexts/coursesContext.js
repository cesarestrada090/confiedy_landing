import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { API_URLS } from '../components/eLearningSchool/constants'

const CoursesContext = createContext()

function CoursesContextProvider({ children }) {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch data
  useEffect(() => {
    axios
      .get(API_URLS.listAllCourses)
      .then((response) => {
        console.log('response', response.data)
        setCourses(response.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <CoursesContext.Provider value={{ courses, isLoading }}>
      {children}
    </CoursesContext.Provider>
  )
}

export default CoursesContextProvider

export function useCourses() {
  const context = useContext(CoursesContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
