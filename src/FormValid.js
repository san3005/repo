import React from "react";
import { Formik, useField, Form, Field} from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import Select from "./Select";

function FormValid() {
  const [se, setSe] = useState(false);
  const [st, setSt] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleclick = () => {
    setSe(true);
    setSt(false);
  };
  const handleclick2 = () => {
    setSe(false);
    setSt(true);
  };
  const handlealert = () => {
    setAlert(false);
    setSt(false);
    setSe(false);
  };
  const dropdownoptions = [
    { key: "Select a location", value: "" },
    { key: "Chennai", value: "Chennai" },
    { key: "Bangalore", value: "Bangalore" },
    { key: "Hyderabad", value: "Hyderabad" },
    { key: "Pune", value: "Pune" },
    { key: "Kochi", value: "Kochi" },
  ];
  const dropdownoptions1 = [
    { key: "Select a location", value: "" },
    { key: "US", value: "US" },
    { key: "Non-US", value: "Non-US" },
    
  ];
  const MyTextArea = ({ label, ...props }) => {
   
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea
          className={`form-control shadow-none 
                 ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const marginTop = { marginTop: 5 };

  const validate = Yup.object({
    Associatename: Yup.string()
      .matches(
        /^[a-zA-Z   ]*$/,
        "Accepts alphabets spaces min 5 and max 30 char"
      )
      .max(30, "Accepts alphabets spaces min 5 and max 30 char")
      .min(5, "Accepts alphabets spaces min 5 and max 30 char")
      .required("Please enter Associate Name"),

    Associateid: Yup.string()
      .matches(/^[0-9]+$/, "Invalid Associate id")
      .max(12, "Invalid Associate id")
      .min(6, "Invalid Associate id")
      .required("Please enter Associate id"),
    Projectid: Yup.string()
      .matches(/^[a-zA-Z0-9]*$/, "Invalid Project Id")
      .max(12, "Invalid Project Id")
      .min(6, "Invalid Project Id")
      .required("Please enter project id"),
      
      shore: Yup.string()
      .oneOf(["On-Shore", "Off-Shore"],"Please Select Location")
      .required("Please Select Location"),
      skills: Yup.array().min(5, "Please Select Min 5 Skills"),

     
         propic: Yup.mixed().required("Please Upload Profile Picture"),
        comments: Yup.string().required("Please enter comments "),

  });
  return (
    <Formik
      initialValues={{
        Associatename: "",
        Associateid: "",
        Projectid: "",
        offshore: "",
        onshore: "",
        shore: "",
        skills: [],
        propic: "",
        comments: "",
      }}
      validationSchema={validate}
      onSubmit={(values,onSubmitProps) => {
        console.log(values);
        console.log('submit props',onSubmitProps);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm(true);
        setAlert(true);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold">
            <span style={{ color: "red" }}>*</span>FORM VALIDATION
          </h1>
          <Form>
            {alert && (
              <div className="alert alert-success" role="alert">
                Thank You For Filling Out Your Information!! {" "}
                <button type="button" style={{marginLeft:"350px"}}className="btn-close btn-close-black" onClick={handlealert} aria-label="Close"></button>

                  
               
              </div>
            )}
            <TextField
              label="Associate Name"
              name="Associatename"
              type="text"
            />
            <TextField label="Associate ID " name="Associateid" type="text" />
            <TextField label="Projectid " name="Projectid" type="text" />
            <FormControl component="fieldset" style={marginTop}>
              <Field
                as={RadioGroup}
                aria-label="shore"
                name="shore"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="Off-Shore"
                  control={<Radio />}
                  label="Off-Shore"
                  onClick={handleclick}

                />
                <FormControlLabel
                  value="On-Shore"
                  control={<Radio />}
                  label="On-Shore"
                  onClick={handleclick2}

                />
              </Field>
            </FormControl>
                      <FormHelperText style={{fontSize:"12px",color:"red"}}>
              <ErrorMessage  name="shore" />
            </FormHelperText>
        

            {se && (
              <Select
                control="select"
                name="offshoree"
                options={dropdownoptions}
                className="select"
              />
            )}
            {st && (
              <Select
                control="select"
                name="onshore"
                options={dropdownoptions1}
                className="select"
              />
            )}
            <div className="row" >
              <div className="col ">
            <label>
              <Field type="checkbox"  name="skills" value="HTML5,CSS3,JS" />
              HTML5,CSS3,JS
            </label>
            </div>
            <div className="col ">

            <label>
              <Field type="checkbox"  name="skills" value="Angular 8" />
              Angular 8            </label>
           </div>
           <div className="col ">

            <label>
              <Field type="checkbox"  name="skills" value="Express JS" />
              Express JS
            </label>
           </div>
           </div>
           <div className="row" >
              <div className="col ">
            <label>
              <Field type="checkbox"  name="skills" value="SASS" />
              SASS
            </label>
            </div>
            <div className="col ">
            <label>
              <Field type="checkbox"  name="skills" value="React JS" />
              React JS
            </label>
           </div>
           <div className="col ">

            <label>
              <Field type="checkbox"  name="skills" value="Node JS" />
              Node JS
            </label>
           </div>
           </div>
           <div className="row" >
              <div className="col ">
            <label>
              <Field type="checkbox"  name="skills" value="ES5,ES6,ES7" />
              ES5,ES6,ES7
            </label>
            </div>
            <div className="col ">

            <label>
              <Field type="checkbox"  name="skills" value="VEU JS" />
              VEU JS
            </label>
           </div>
           <div className="col ">

            <label>
              <Field type="checkbox"  name="skills" value="Mongo DB" />
              Mongo DB
            </label>
           </div>
           </div>
           <div className="row" >
              <div className="col-md-4 ">
            <label>
              <Field type="checkbox"  name="skills" value="Bootstrap 4" />
              Bootstrap 4
            </label>
           
           </div>
           <div className="col-md-4 ">
            <label>
              <Field type="checkbox"  name="skills" value="TypeScript" />
              TypeScript

            </label>
           </div>
           </div>
          <ErrorMessage name="skills" component="div" className="error" />

            
            <div className="form-group mt-4">
              <TextField
                id="file"
                name="propic"
                type="file"
                label="Upload Profile"
                className="form-control shadow-none"
              />
            </div>
            <MyTextArea
              className="mt-4"
              placeholder="comments"
              name="comments"
              rows="4"
              cols="98"
            />
            

            <div className="row">
              <div className="col-md-3">
                {" "}
                <button
                  className="btn btn-primary mt-4"
                   disabled={!(formik.dirty && formik.isValid)}
                  type="submit"
                >
                  Submit
                </button>
              </div>

              <div className="col-md-3">
                {" "}
                <button
                  className="btn btn-danger mt-4 "
                  type="reset"
                  onClick={handlealert}
                >
                  Reset
                </button>{" "}
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default FormValid;