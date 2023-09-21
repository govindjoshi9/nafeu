import React, { useState, useEffect } from "react"
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
  FormFeedback,
  Alert,
} from "reactstrap"
import Breadcrumb from "../../components/Common/Breadcrumb"
import * as Yup from "yup"
import { postUpdateProfile } from "helpers/AuthType/user" // Import the postUpdateProfile function

const EditProfile = () => {
  document.title = "Edit Profile | Dashboard"

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")

  const [validationSchema] = useState(
    Yup.object().shape({
      userName: Yup.string().required("Please enter your User Name"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your Email"),
      fullName: Yup.string().required("Please enter your Full Name"),
      countryCode: Yup.string().required("Please enter your Country Code"),
      mobileNumber: Yup.string().required("Please enter your Mobile Number"),
      address: Yup.string().required("Please enter your Address"),
      country: Yup.string().required("Please enter your Country"),
      state: Yup.string().required("Please enter your State"),
      city: Yup.string().required("Please enter your City"),
      zipCode: Yup.string().required("Please enter your ZIP Code"),
    })
  )

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const authUser = JSON.parse(localStorage.getItem("authUser"))
      setUserName(authUser.user.member_name)
      setEmail(authUser.user.email)
      setFullName(authUser.user.full_name)
      setCountryCode(authUser.user.country_code)
      setMobileNumber(authUser.user.contact)
      setAddress(authUser.user.address)
      setCountry(authUser.user.country)
      setState(authUser.user.state)
      setCity(authUser.user.city)
      setZipCode(authUser.user.zip_code)
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setIsSubmitting(true)
      setErrors({})
      setSuccessMessage("")
      setErrorMessage("")
      await validationSchema.validate(
        {
          userName,
          email,
          fullName,
          countryCode,
          mobileNumber,
          address,
          country,
          state,
          city,
          zipCode,
        },
        { abortEarly: false }
      )

      // Submit data to the server
      const response = await postUpdateProfile({
        userName,
        email,
        fullName,
        countryCode,
        mobileNumber,
        address,
        country,
        state,
        city,
        zip_code: zipCode,
      })

      if (response === "Profile updated successfully") {
        setSuccessMessage("Profile updated successfully!")
      } else {
        setErrorMessage("Something went wrong")
      }
    } catch (validationErrors) {
      const newErrors = {}
      validationErrors.inner.forEach(error => {
        newErrors[error.path] = error.message
      })
      setErrors(newErrors)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Edit Profile" breadcrumbItem="Edit Profile" />
          <Row>
            <Col lg={8}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Edit Profile</CardTitle>
                  <Form onSubmit={handleSubmit}>
                    {successMessage && (
                      <Alert color="success">{successMessage}</Alert>
                    )}
                    {errorMessage && (
                      <Alert color="danger">{errorMessage}</Alert>
                    )}
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="userName">User Name</Label>
                          <Input
                            type="text"
                            id="userName"
                            className="form-control"
                            placeholder="Enter Your User Name"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            invalid={!!errors.userName}
                          />
                          {errors.userName && (
                            <FormFeedback>{errors.userName}</FormFeedback>
                          )}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter Your Email ID"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            invalid={!!errors.email}
                          />
                          {errors.email && (
                            <FormFeedback>{errors.email}</FormFeedback>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Enter Your Full Name"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            invalid={!!errors.fullName}
                          />
                          {errors.fullName && (
                            <FormFeedback>{errors.fullName}</FormFeedback>
                          )}
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="countryCode">Country Code</Label>
                          <Input
                            type="text"
                            id="countryCode"
                            className="form-control"
                            placeholder="Enter Your Country Code"
                            value={countryCode}
                            onChange={e => setCountryCode(e.target.value)}
                            invalid={!!errors.countryCode}
                          />
                          {errors.countryCode && (
                            <FormFeedback>{errors.countryCode}</FormFeedback>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="mobileNumber">Mobile Number</Label>
                          <Input
                            type="number"
                            id="mobileNumber"
                            className="form-control"
                            placeholder="Enter Your Mobile Number"
                            value={mobileNumber}
                            onChange={e => setMobileNumber(e.target.value)}
                            invalid={!!errors.mobileNumber}
                          />
                          {errors.mobileNumber && (
                            <FormFeedback>{errors.mobileNumber}</FormFeedback>
                          )}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            type="text"
                            id="address"
                            className="form-control"
                            placeholder="Enter Your Address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            invalid={!!errors.address}
                          />
                          {errors.address && (
                            <FormFeedback>{errors.address}</FormFeedback>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="country">Country</Label>
                          <Input
                            type="text"
                            id="country"
                            className="form-control"
                            placeholder="Select Country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            invalid={!!errors.country}
                          />
                          {errors.country && (
                            <FormFeedback>{errors.country}</FormFeedback>
                          )}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="state">State/Region</Label>
                          <Input
                            type="text"
                            id="state"
                            className="form-control"
                            placeholder="Enter Your State/Region"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            invalid={!!errors.state}
                          />
                          {errors.state && (
                            <FormFeedback>{errors.state}</FormFeedback>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="city">City</Label>
                          <Input
                            type="text"
                            id="city"
                            className="form-control"
                            placeholder="Enter Your City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            invalid={!!errors.city}
                          />
                          {errors.city && (
                            <FormFeedback>{errors.city}</FormFeedback>
                          )}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="zipCode">Zip Code</Label>
                          <Input
                            type="text"
                            id="zipCode"
                            className="form-control"
                            placeholder="Enter Your Zip Code"
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                            invalid={!!errors.zipCode}
                          />
                          {errors.zipCode && (
                            <FormFeedback>{errors.zipCode}</FormFeedback>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <div className="mb-3">
                      <div className="form-check">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="formrow-customCheck"
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="formrow-customCheck"
                        >
                          Check me out
                        </Label>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="btn btn-primary w-md"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EditProfile
