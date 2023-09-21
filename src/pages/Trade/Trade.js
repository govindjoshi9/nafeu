import React from "react"

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
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
// import { getApiPriceFetch, postStacking } from "helpers/AuthType/user"
import { useState } from "react"
import { useEffect } from "react"

const Trade = props => {
  const [getApiValue, setgetApivalue] = useState("")
  // console.log("get api value statte is here:", getApiValue)

  const [usdQty, setusdQty] = useState("")
  const [tokenQty, settokenQty] = useState("")
  const [hashcode, sethashcode] = useState("")
  const [walletAddress, setwalletAddress] = useState("")

  // useEffect(() => {
  //   const getApiFunctionFetch = async () => {
  //     try {
  //       const livePriceData = await getApiPriceFetch()
  //       console.log("live price data is here:", livePriceData)
  //       setgetApivalue(livePriceData)
  //     } catch (Error) {
  //       console.log("Error are here:", Error)
  //     }
  //   }
  //   getApiFunctionFetch()
  // }, [])

  // const handleSubmit = async event => {
  //   event.preventDefault()

  //   // Prepare the data object to send to the API
  //   const requestData = {
  //     hashcode: hashcode,
  //     walletAddress: walletAddress,
  //     usdQty: usdQty,
  //     tokenQty: tokenQty,
  //   }
  //   try {
  //     // Call the API to post the withdrawal request
  //     const response = await postStacking(requestData)

  //     // Handle the response as needed
  //     console.log("Withdrawal request submitted successfully:", response)

  //     // Optionally, you can reset the form fields after a successful submission
  //     setusdQty("")
  //     settokenQty("")
  //     sethashcode("")
  //     setwalletAddress("")
  //   } catch (error) {
  //     console.error("Error submitting withdrawal request:", error)
  //   }
  // }

  //meta title
  document.title = "Form Layouts | Nafeu - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Trade" breadcrumbItem="Trade" />

          <Row>
            <Col lg={10}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Trade </CardTitle>

                  <Form>
                    <div className="row mb-4">
                      <Label className="col-sm-3 col-form-label">
                        usdQty (usdt)
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="number"
                          className="form-control"
                          placeholder="Enter Usdt Value"
                          value={usdQty}
                          onChange={event => setusdQty(event.target.value)}
                        />
                      </Col>
                    </div>

                    <div className="row mb-4">
                      <Label className="col-sm-3 col-form-label">
                        HashCode
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Enter hash code"
                          value={hashcode}
                          onChange={event => sethashcode(event.target.value)}
                        />
                      </Col>
                    </div>

                    <div className="row mb-4">
                      <Label className="col-sm-3 col-form-label">Wallet</Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Wallet Address"
                          value={walletAddress}
                          onChange={event =>
                            setwalletAddress(event.target.value)
                          }
                        />
                      </Col>
                    </div>

                    <div className="row justify-content-end">
                      <Col sm={9}>
                        <div>
                          <Button
                            type="submit"
                            color="primary"
                            className="w-md"
                            // onSubmit={handleSubmit}
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  )
}

export default Trade
