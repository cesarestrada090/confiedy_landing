import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { API_URLS } from '../components/eLearningSchool/constants'

const APIContext = createContext()

function APIContextProvider({ children }) {
  const [universities, setUniversities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch data
  useEffect(() => {
    axios
      .get(API_URLS.listUniversities)
      .then((response) => {
        console.log('response', response.data)
        setUniversities(response.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <APIContext.Provider value={{ universities, isLoading }}>
      {children}
    </APIContext.Provider>
  )
}

export default APIContextProvider

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}

// Lista de universidades:
// http://52.1.94.208:8084/app/universidad

// Lista de cursos por universidad:
// path: curso/universidad/{universidadId}
// http://52.1.94.208:8084/app/curso/universidad/1

// Lista de docentes por curso:
// path: docente/curso/{cursoId}
// http://52.1.94.208:8084/app/docente/curso/1
