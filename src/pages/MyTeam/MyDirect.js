// src/components/filter.
import React, { useMemo } from "react"
import PropTypes from "prop-types"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

function MyDirect() {
  const columns = useMemo(
    () => [
      {
        Header: "user Id",
        accessor: "username",
      },
      {
        Header: "minting (USD)",
        accessor: "minting(usd)",
      },
      {
        Header: "Minting(token)",
        accessor: "minting(token)",
      },
    ],
    []
  )

  const data = [
    {
      username: "099809798",
      "minting(usd)": 100,
      "minting(token)": "Stellar",
    },
    {
      username: "099809798",
      "minting(usd)": 100,
      "minting(token)": "Stellar",
    },
    {
      username: "099809798",
      "minting(usd)": 100,
      "minting(token)": "Stellar",
    },
    {
      username: "099809798",
      "minting(usd)": 200,
      "minting(token)": "BTT",
    },
    {
      username: "293809389",
      "minting(usd)": 100000,
      "minting(token)": "Bitcoin",
    },
    {
      username: "099809798",
      "minting(usd)": 9000,
      "minting(token)": "Matic",
    },
    {
      username: "912088971",
      "minting(usd)": 300,
      "minting(token)": "Cardano",
    },
    {
      username: "091098299",
      "minting(usd)": 10,
      "minting(token)": "Sushil Inu",
    },
    {
      username: "099809798",
      "minting(usd)": 1200,
      "minting(token)": "Shiba Inu",
    },
    {
      username: "87382",
      "minting(usd)": 900,
      "minting(token)": "Gala",
    },
  ]

  //meta title
  document.title = "My Referral |  "

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs
          title="Referral"
          breadcrumbItem="MY Referral
        "
        />
        {/* <Table columns={columns} data={data} /> */}
        <TableContainer
          columns={columns}
          data={data}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="custom-header-css"
        />
      </div>
    </div>
  )
}
MyDirect.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default MyDirect
