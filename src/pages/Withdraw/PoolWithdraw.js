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

const PoolWithdraw = props => {
  //meta title
  document.title = "Withdraw Pool "

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Withdraw" breadcrumbItem="WithdrawUsdt" />

          <Row>
            <Col lg={10}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Withdraw </CardTitle>

                  <Form>
                    <div className="row mb-4">
                      <Label className="col-sm-3 col-form-label">
                        Wallet Balance($)
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="number"
                          className="form-control"
                          placeholder="Enter Usdt Value"
                        />
                      </Col>
                    </div>
                    <div className="row mb-4">
                      <Label className="col-sm-3 col-form-label">
                        Withdrawl Amt ($)
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
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
                          >
                            Withdraw
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

export default PoolWithdraw
