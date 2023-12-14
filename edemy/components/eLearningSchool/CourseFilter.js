import React from 'react'

import { Select } from 'baseui/select'

const CourseFilter = ({ disabled, options, onChange, value }) => {
  return (
    <Select
      disabled={disabled}
      options={options}
      value={value}
      placeholder="Seleccione Curso"
      onChange={onChange}
    />
  )
}

export default CourseFilter
