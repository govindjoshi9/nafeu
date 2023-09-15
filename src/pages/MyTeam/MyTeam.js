// src/components/filter.
import React, { useMemo } from "react"
import PropTypes from "prop-types"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

function MyTeam() {
  const columns = useMemo(
    () =>
      [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Level",
          accessor: "level",
        },
        {
          Header: "user Id",
          accessor: "username",
        },
        {
          Header: "Sponsor Id",
          accessor: "sponsorid",
        },
        {
          Header: "minting (USD)",
          accessor: "minting(usd)",
        },
        {
          Header: "Minting(token)",
          accessor: "minting(token)",
        },
        {
          Header: "Team Business",
          accessor: "teambusiness",
        },
      ].map((item, index) => ({
        ...item,
        id: index + 1, // Generate descending IDs
      })),
    []
  )

  const data = useMemo(
    () =>
      [
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Stellar",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 90000,
          "minting(token)": "gaura",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Ethereum",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Bitcoin",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Matic",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Shiba",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Gala",
          teambusiness: "1230",
        },

        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Stellar",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Stellar",
          teambusiness: "1230",
        },
        {
          level: 1,
          username: "099809798",
          sponsorid: 123244,
          "minting(usd)": 100,
          "minting(token)": "Stellar",
          teambusiness: "1230",
        },
      ].map((item, index) => ({
        ...item,
        id: index + 1,
      })),
    []
  )

  //meta title
  document.title = "My Team | "

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs
          title="MyTeam"
          breadcrumbItem="MY Team
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
MyTeam.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default MyTeam
