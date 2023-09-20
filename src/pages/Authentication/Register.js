import React, { useEffect, useState } from "react"
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  Form,
  FormFeedback,
} from "reactstrap"
import Select from "react-select"
import country from "./country"
// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

// action
import { registerUser, apiError } from "../../store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"

// import images
import profileImg from "../../assets/images/profile-img.png"
import logoImg from "../../assets/images/logo.svg"

const Register = props => {
  //meta title
  document.title = "Register | Nafeu - React Admin & Dashboard Template"

  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState(null)
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      username: "",
      password: "",
      cpassword: "",
      country: country[0].label,
      contactNumber: "",
      SponcerID: "", // Add SponcerID field
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
      cpassword: Yup.string()
        .required("Please Confirm Your Password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      contactNumber: Yup.number()
        .required("Please Enter Your Contact Number")
        .integer("Contact Number must be an integer"),
      SponcerID: Yup.number() // Add validation for SponcerID
        .required("Please Enter Your SponcerID")
        .integer("SponcerID must be an integer"),
    }),

    onSubmit: values => {
      console.log("on register user ")
      dispatch(registerUser(values))
    },
  })

  const { user, registrationError, loading } = useSelector(state => ({
    user: state.Account.user,
    registrationError: state.Account.registrationError,
    loading: state.Account.loading,
  }))
  console.log("user", user)

  useEffect(() => {
    dispatch(apiError(""))
  }, [])

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Nafeu account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        console.log("submit")
                        return false
                      }}
                    >
                      {user && user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {registrationError && registrationError ? (
                        <Alert color="danger">{registrationError}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <Label className="form-label">SponcerID</Label>
                        <Input
                          id="SponcerID"
                          name="SponcerID"
                          className="form-control"
                          placeholder="Enter Sponcer ID"
                          type="SponcerID"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.SponcerID || ""}
                          invalid={
                            validation.touched.SponcerID &&
                            validation.errors.SponcerID
                              ? true
                              : false
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Full Name</Label>
                        <Input
                          name="username"
                          type="text"
                          placeholder="Enter username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ""}
                          invalid={
                            validation.touched.username &&
                            validation.errors.username
                              ? true
                              : false
                          }
                        />
                        {validation.touched.username &&
                        validation.errors.username ? (
                          <FormFeedback type="invalid">
                            {validation.errors.username}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Country Code</Label>
                        <Select
                          options={country.map(country => ({
                            value: country.label,
                            label: `${country.label} (+${country.phone})`,
                          }))}
                          value={selectedCountry}
                          onChange={selectedOption =>
                            setSelectedCountry(selectedOption)
                          } // Update this line
                          placeholder="Select Country Code"
                        />
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Contact Number</Label>
                        <Input
                          id="contactNumber"
                          name="contactNumber"
                          className="form-control"
                          placeholder="Enter Contact Number"
                          type="contactNumber"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.contactNumber || ""}
                          invalid={
                            validation.touched.contactNumber &&
                            validation.errors.contactNumber
                              ? true
                              : false
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password || ""}
                          invalid={
                            validation.touched.password &&
                            validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Confirm Password</Label>
                        <Input
                          name="cpassword"
                          type="cpassword"
                          placeholder="Enter confirm Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.cpassword || ""}
                          invalid={
                            validation.touched.cpassword &&
                            validation.errors.cpassword
                              ? true
                              : false
                          }
                        />
                        {validation.touched.cpassword &&
                        validation.errors.cpassword ? (
                          <FormFeedback type="invalid">
                            {validation.errors.cpassword}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Nafeu{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="font-weight-medium text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Nafeu. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Register
