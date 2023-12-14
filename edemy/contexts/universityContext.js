import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { API_URLS } from '../components/eLearningSchool/constants'

const UniversityContext = createContext()

function UniversityContextProvider({ children }) {
  const [universities, setUniversities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch data
  useEffect(() => {
    axios
      .get(API_URLS.listUniversities)
      .then((response) => {
        setUniversities(response.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <UniversityContext.Provider value={{ universities, isLoading }}>
      {children}
    </UniversityContext.Provider>
  )
}

export default UniversityContextProvider

export function useUniversity() {
  const context = useContext(UniversityContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
