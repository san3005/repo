import React from 'react'
import {ErrorMessage,useField} from 'formik'

function TextField({label,...props}) {
    const[field,meta]=useField(props);
    return (

            <div >
        <label htmlFor={field.name}>{label}</label>

            <input 
            className={`form-control shadow-none px-20 ${meta.touched && meta.error && 'is-invalid'}`}
                        {...field}{...props} autoComplete="off" />
            <ErrorMessage component='div'name={field.name} className="error"/>
 </div>
    )
}

export default TextField
