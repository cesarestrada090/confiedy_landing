import React from 'react'

import { Select } from 'baseui/select'

const UniversityFilter = ({ options, onChange, value }) => {
  return (
    <Select
      options={options.map(({ id, nombre }) => ({ label: nombre, id }))}
      value={value}
      placeholder="Seleccione Universidad"
      onChange={onChange}
    />
  )
}

export default UniversityFilter
