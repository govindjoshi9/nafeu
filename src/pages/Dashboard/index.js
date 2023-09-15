import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

import classNames from "classnames";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

//import action
import { getChartsData as onGetChartsData } from "../../store/actions";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import SocialSource from "./SocialSource";
import ActivityComp from "./ActivityComp";
import TopCities from "./TopCities";
import LatestTranaction from "./LatestTranaction";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";

const Dashboard = props => {
  const [modal, setmodal] = useState(false);
  const [subscribemodal, setSubscribemodal] = useState(false);

  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData
  }));

  const reports = [
    { title: "My Package", iconClass: "bx-copy-alt", description: "1,235" },
    {
      title: "My Downline",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Total Active",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Total Inactive",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Total Direct",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Total Team",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Current Pool",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Current level",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Divident Bonus",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Direct Bonus",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Booster Bonus",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Booster Level Bonus",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Level Bonus",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Autopool Bonus",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Monthly Reward",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Total Bonus",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    {
      title: "My Wallet",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    {
      title: "Pool Wallet",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    {
      title: "Rebirth Wallet",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    {
      title: "Withdraw Amount",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    {
      title: "Pool Withdraw",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true);
    }, 2000);
  }, []);

  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");

  useEffect(() => {
    setPeriodData(chartsData);
  }, [chartsData]);

  const onChangeChartPeriod = pType => {
    setPeriodType(pType);
    dispatch(onGetChartsData(pType));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetChartsData("yearly"));
  }, [dispatch]);

  //meta title
  document.title="Dashboard | Skote - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />

          <Row>
            <Col xl="4">
              <WelcomeComp />
              <MonthlyEarning />
            </Col>
            <Col xl="8">
              <Row>
                {/* Reports Render */}
                {reports.map((report, key) => (
                  <Col md="4" key={"_col_" + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                          </div>
                          <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="avatar-title rounded-circle bg-primary">
                              <i
                                className={
                                  "bx " + report.iconClass + " font-size-24"
                                }
                              ></i>
                            </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Card>
                
              </Card>
            </Col>
          </Row>
          

        </Container>
      </div>

      {/* subscribe ModalHeader */}
      

    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
