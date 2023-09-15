// src/components/filter.
import React, { useMemo } from "react"
import PropTypes from "prop-types"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

function BoosterLevelBonus() {
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Nefeu(USD)",
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
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 100,
      "minting(token)": "Stellar",
    },
    {
      date: "15/05/2000",
      type: "Restake",
      "minting(usd)": 100,
      "minting(token)": "Kishu Inu",
    },
    {
      date: "08/08/2000",
      type: "Restake",
      "minting(usd)": 100,
      "minting(token)": "Stellar",
    },
    {
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 100,
      "minting(token)": "Gala",
    },
    {
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 800,
      "minting(token)": "S39Token",
    },
    {
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 900,
      "minting(token)": "Cardano",
    },
    {
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 900,
      "minting(token)": "Bitcoin",
    },
    {
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 500,
      "minting(token)": "polygon",
    },
    {
      date: "12/05/2000",
      type: "stake",
      "minting(usd)": 900,
      "minting(token)": "Matic",
    },
    {
      date: "12/05/2000",
      type: "Restake",
      "minting(usd)": 1000,
      "minting(token)": "shiba inu",
    },
    {
      date: "12/05/2000",
      type: "stake",
      "minting(usd)": 900,
      "minting(token)": "XRP",
    },
  ]

  //meta title
  document.title = "BoosterLevelBonus "

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="BoosterLevelBonus" breadcrumbItem="Summary" />
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
BoosterLevelBonus.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default BoosterLevelBonus
