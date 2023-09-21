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
//import Charts
import StackedColumnChart from "./StackedColumnChart";

//import action
import { getChartsData as onGetChartsData } from "../../store/actions";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import { getDashboardFunction } from "../../helpers/AuthType/user"

//redux
import { useSelector, useDispatch } from "react-redux";

const Dashboard = props => {
  const [modal, setmodal] = useState(false);
  const [subscribemodal, setSubscribemodal] = useState(false);
  const [apidata, setApiData] = useState(null);
  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData
  }));

useEffect(() => {
  async function fetchData() {
    try {
      const response = await getDashboardFunction()
      console.log("API response:", response.user) // Log the API response
      setApiData(response.user)
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data from the API:", error) // Log any errors
      // setLoading(false);
    }
  }

  fetchData()
}, [])
  
  
  const reports = [
    { title: "My Package", iconClass: "bx-copy-alt", description: "1,235" },
    {
      title: "My Downline",
      iconClass: "bx-archive-in",
      description: apidata?.global_roi,
    },
    {
      title: "Total Active",
      iconClass: "bx-archive-in",
      description: apidata?.total_earning,
    },
    {
      title: "Total Inactive",
      iconClass: "bx-archive-in",
      description: "$",
    },
    {
      title: "Total Direct",
      iconClass: "bx-archive-in",
      description: "",
    },
    {
      title: "Total Team",
      iconClass: "bx-archive-in",
      description: "5",
    },
    {
      title: "Current Pool",
      iconClass: "bx-archive-in",
      description: "$3",
    },
    {
      title: "Current level",
      iconClass: "bx-archive-in",
      description: "",
    },
    {
      title: "Divident Bonus",
      iconClass: "bx-archive-in",
      description: "$6",
    },
    {
      title: "Direct Bonus",
      iconClass: "bx-archive-in",
      description: "$6",
    },
    {
      title: "Booster Bonus",
      iconClass: "bx-archive-in",
      description: "$9",
    },
    {
      title: "Booster Level Bonus",
      iconClass: "bx-archive-in",
      description: "$6",
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
  document.title="Dashboard | Nafeu - React Admin & Dashboard Template";

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
