import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
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
  FormGroup,
} from "reactstrap"

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

// action
import { registerUser, apiError } from "../../store/actions"

import { getSponcerName } from "helpers/AuthType/user"
//redux
import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"

// import images
import profileImg from "../../assets/images/laptop-img.png"
import logoImg from "../../assets/images/logo.svg"

const Register = props => {
  //meta title
  document.title = "Register |  - "

  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)
  const [termsError, setTermsError] = useState("")
  const [sponcerId, setsponcerId] = useState("")

  // const location = useLocation()

  // useEffect(() => {
  //   const getQueryParam = name => {
  //     const params = new URLSearchParams(location.search)
  //     return params.get(name)
  //   }

  //   const referralParam = getQueryParam("ref")

  //   if (referralParam === null) {
  //     window.location.href = "/login"
  //     alert("No Referral code Available ")
  //   }

  //   if (referralParam) {
  //     setsponcerId(referralParam)
  //     validation.setFieldValue("sponcerid", referralParam)
  //   }
  // }, [location])

  const dispatch = useDispatch()

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      username: "",
      password: "",
      sponcerid: "",
      sponseName: "",
      countryCode: "",
      contactNumber: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
      sponcerid: Yup.string().required("Please Enter Sponsor ID"),
      sponseName: Yup.string().required("Please Enter Sponse Name"),
      countryCode: Yup.string().required("Please Enter Country Code"),
      contactNumber: Yup.string().required("Please Enter Contact Number"),
      cpassword: Yup.string()
        .required("Please Enter Confirm Password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: values => {
      if (isAgreed) {
        console.log("called submit")
        // Reset the terms error if the user has agreed
        setTermsError("")
        dispatch(registerUser(values))
      } else {
        // Display an error message
        setTermsError("You must agree to the terms before registering.")
      }
    },
  })

  const { user, registrationError, loading } = useSelector(state => ({
    user: state.Account.user,
    registrationError: state.Account.registrationError,
    loading: state.Account.loading,
  }))

  useEffect(() => {
    dispatch(apiError(""))
  }, [])

  useEffect(() => {
    if (user?.status === true) {
      setSuccessModalVisible(true)
    }
  }, [user])

  useEffect(() => {
    fetchName()
  }, [sponcerId])

  async function fetchName() {
    if (sponcerId !== "") {
      const name = await getSponcerName(sponcerId)
      validation.setFieldValue("sponseName", name)
    }
  }

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
                        <h3>Welcome</h3>
                        <p>Please Sign up and Continue.</p>
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
                        // console.log(submit)
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
                        <Label className="form-label">Sponsor ID</Label>
                        <Input
                          name="sponcerid"
                          type="text"
                          // disabled
                          placeholder="Enter Sponsor ID"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.sponcerid || ""}
                          invalid={
                            validation.touched.sponcerid &&
                            validation.errors.sponcerid
                              ? true
                              : false
                          }
                        />
                        {validation.touched.sponcerid &&
                        validation.errors.sponcerid ? (
                          <FormFeedback type="invalid">
                            {validation.errors.sponcerid}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Sponsor Name</Label>
                        <Input
                          name="sponseName"
                          type="text"
                          // disabled
                          placeholder="Enter Sponsor Name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.sponseName || ""}
                          invalid={
                            validation.touched.sponseName &&
                            validation.errors.sponseName
                              ? true
                              : false
                          }
                        />
                        {validation.touched.sponseName &&
                        validation.errors.sponseName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.sponseName}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Username</Label>
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
                        <Label className="form-label">Contact Number</Label>
                        <div className="d-flex">
                          <div style={{ flex: 1, marginRight: 2 }}>
                            <Input
                              name="countryCode"
                              type="text"
                              placeholder="+1"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.countryCode || ""}
                              invalid={
                                validation.touched.countryCode &&
                                validation.errors.countryCode
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.countryCode &&
                            validation.errors.countryCode ? (
                              <FormFeedback type="invalid">
                                {validation.errors.countryCode}
                              </FormFeedback>
                            ) : null}
                          </div>

                          <div style={{ flex: 5 }}>
                            <Input
                              name="contactNumber"
                              type="text"
                              placeholder="1234567890"
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
                            {validation.touched.contactNumber &&
                            validation.errors.contactNumber ? (
                              <FormFeedback type="invalid">
                                {validation.errors.contactNumber}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </div>
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
                          type="password"
                          placeholder="Enter Confirm Password"
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

                      

                      <div className="mb-3">
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="checkbox"
                              id="agreeCheckbox"
                              checked={isAgreed}
                              onChange={() => setIsAgreed(!isAgreed)}
                            />{" "}
                            By registering you agree to the Nafeu{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </Label>
                        </FormGroup>
                        {termsError && (
                          <div className="text-danger">{termsError}</div>
                        )}
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Register
                        </button>
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
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Nafeu
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={isSuccessModalVisible}
        toggle={() => setSuccessModalVisible(!isSuccessModalVisible)}
      >
        <ModalHeader>Registration Successful</ModalHeader>
        <ModalBody>
          <p>Your user ID is: {user?.userId}</p>
        </ModalBody>
        <ModalFooter>
          <a href="/login">
            <button className="btn btn-primary">Login Now </button>
          </a>

          <button
            className="btn btn-primary"
            onClick={() => setSuccessModalVisible(false)}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default Register
