import React from 'react'
import { Field, ErrorMessage } from 'formik'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <div >
      <Field as='select' id={name} name={name} {...rest} className='form-select'>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      </div>
  <ErrorMessage component="div" style={{color:"red"}} name={name} />
    </div>
  )
}

export default Select